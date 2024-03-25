document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '375b259f847cc46e24a790d72d114123'; 
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const fetchWeather = async (city) => {
        const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();

        updateWeatherUI(data);
    }


    // Function to update the UI
    function updateWeatherUI(data) {
        document.querySelector('.header-city').textContent = data.name;
        document.querySelector('.weather-h2').textContent = data.weather[0].main;
        document.querySelector('.icon-weather').src = data.weather[0].main === 'Clouds' ? '/assets/cloudy.png' : '/assets/clear.png';
        document.querySelector('.weather-temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.wind').textContent = `${data.wind.speed} km/h`;
        document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
    }

    document.querySelector('.btn-confirm').addEventListener('click', async () => {
        const city = document.querySelector('.input-city').value;
        await fetchWeather(city);
    });

    fetchWeather('New York City');
});

const btnToggleModal = document.querySelector('.btn-arr');

btnToggleModal.addEventListener('click', () => {
    document.querySelector('.modal-change-city').classList.toggle('hidden');
})