document.addEventListener('DOMContentLoaded', function() {
    // Fetch weather data using API and update UI
    fetchWeatherData();
});

function fetchWeatherData() {
    // Use appropriate API to fetch weather data based on user's location
    // For demonstration purposes, we're using sample data here
    const weatherData = {
        location: 'New York',
        temperature: '23°C',
        humidity: '55%',
        windSpeed: '10 km/h'
    };

    // Update UI with fetched weather data
    updateWeatherUI(weatherData);
}

function updateWeatherUI(data) {
    document.getElementById('location').textContent = data.location;
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('wind-speed').textContent = data.windSpeed;
}
