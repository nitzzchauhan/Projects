const apiKey = 'ce68fcf796774bb8b2735306242508'; // Replace with your WeatherAPI key

async function getWeather() {
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    if (!city) {
        errorDiv.textContent = 'Please enter a city name!';
        resultDiv.innerHTML = '';
        return;  
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        
        if (!response.ok) {
            throw new Error('City not found!');
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Weather: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
        `;
        errorDiv.textContent = '';
    } catch (error) {
        resultDiv.innerHTML = '';
        errorDiv.textContent = error.message;
    }
}
