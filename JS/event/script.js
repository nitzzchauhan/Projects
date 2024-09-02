// script.js
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = new Date(document.getElementById('eventDate').value).getTime();

    // Create a countdown container
    const countdownContainer = document.createElement('div');
    countdownContainer.className = 'countdown';

    // Display the event name
    const eventTitle = document.createElement('h3');
    eventTitle.textContent = eventName;
    countdownContainer.appendChild(eventTitle);

    // Display the countdown
    const countdownDisplay = document.createElement('p');
    countdownContainer.appendChild(countdownDisplay);

    document.getElementById('countdowns').appendChild(countdownContainer);

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = 'Event has passed!';
            countdownDisplay.style.color = 'red';
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);

    // Reset form
    document.getElementById('eventForm').reset();
});
