const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const location = searchInput.value;
  if (location) {
    getWeatherInfo(location);
  }
});

function getWeatherInfo(location) {
  const apiKey = 'bc295a4bc8727b69c6df749ba9cc88be'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>
                               <p>Description: ${description}</p>`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
