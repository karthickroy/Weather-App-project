const apiKey = "c57dfd24348f4ccc95e131422251604";
const submitBtn = document.querySelector(".submit-button");

const WeatherImg = document.querySelector(".weather-img");
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
  // document.querySelector(".temper").innerHTML = `${data.current.temp_c}°C`;
  document.querySelector(
    ".weather-details"
  ).innerHTML = `${data.current.condition.text}`;

  document.querySelector(".city").innerHTML = `${
    data.location.region + "," + data.location.name
  }`;
  document.querySelector(".temperature").innerHTML = `${data.current.temp_c}°C`;
  document.querySelector(
    ".feels-like"
  ).innerHTML = `Feels like ${data.current.feelslike_c}°C`;
  document.querySelector(
    ".humidity-detail"
  ).innerHTML = `${data.current.humidity}%`;
  WeatherImg.src = `${data.current.condition.icon}`;
  document.querySelector(
    ".wind-speed"
  ).innerHTML = `${data.current.wind_kph} Km/hr`;
  document
    .querySelector(".main-arrow")
    .style.setProperty("--rotation", `${data.current.wind_degree}deg`);

  const condition = data.current.condition.text.toLowerCase();
  const body = document.body;

  // if (condition.includes("Sunny")) {
  //   body.style.backgroundImage = "";
  // }
  if (condition.includes("sunny")) {
    body.style.backgroundImage = "url('assets/sunny.jpg')";
  } else if (condition.includes("cloud")) {
    body.style.backgroundImage = "url('assets/clouds.jpg')";
  } else if (condition.includes("rain")) {
    body.style.backgroundImage = "url('assets/rainy.jpg')";
  } else if (condition.includes("snow")) {
    body.style.backgroundImage = "url('assets/snowy.jpg')";
  } else if (condition.includes("partly Cloudy")) {
    body.style.backgroundImage = "url('assets/partly-clouds.jpg')";
  } else if (condition.includes("clear")) {
    body.style.backgroundImage = "url('assets/clear.jpg')";
  } else if (condition.includes("Moderate or heavy rain with thunder")) {
    body.style.backgroundImage = "url('assets/thunder-storm.jpg')";
  } else if (condition.includes("overcast")) {
    body.style.backgroundImage = "url('assets/overcast.jpg')";
  }
  localStorage.setItem("Weather Data", JSON.stringify(data));
}
const params = new URLSearchParams(window.location.search);
checkWeather(params.get("city"));
