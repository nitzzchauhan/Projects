const apiKey: string = 'ce68fcf796774bb8b2735306242508'; // Replace with your WeatherAPI key

// Define types for the API response
interface WeatherResponse {
    location: {
        name: string;
        country: string;
    };  
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
        humidity: number;
    };
}

async function getWeather(): Promise<void> {
    const cityInput = document.getElementById('city') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    const errorDiv = document.getElementById('error') as HTMLDivElement;

    const city: string = cityInput.value;

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

        const data: WeatherResponse = await response.json();

        resultDiv.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Weather: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
        `;
        errorDiv.textContent = '';
    } catch (error) {
        if (error instanceof Error) {
            resultDiv.innerHTML = '';
            errorDiv.textContent = error.message;
        }
    }
}
