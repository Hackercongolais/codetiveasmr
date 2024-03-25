const temperature = document.querySelector(".temperature");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const rain = document.querySelector(".rain");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const cityInput = document.querySelector(".input-city");
let city = "";

const handleInput = (event) => {
  city = event.target.value;
};

const handleBlur = async () => {
    const data = await getWeather();
    updateUI(data);
}

cityInput.addEventListener("input", handleInput);
cityInput.addEventListener("blur", handleBlur);

const updateUI = (data) => {
  temperature.textContent = data.main.temp + "°C";
  min.textContent = "Min" + data.main.temp_min + "°C";
  max.textContent = "Max" + data.main.temp_max + "°C";
  rain.textContent = data.weather[0].main + "%";
  wind.textContent = data.wind.speed + "km/h";
  humidity.textContent = data.main.humidity + "%";
};

const getWeather = async () => {
  const apiKey = "80df375f9cc93b8c836f35418bdf98a3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data)

  return data;
};
