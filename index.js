// document.querySelector(".submit-button").addEventListener("click", function () {
//   const city = document.querySelector(".search-city").value.trim();
//   const errorEl = document.querySelector(".error");

//   // const Error = document.querySelector(".error");
//   if (city) {
//     window.location.href = `weather.html?city=${city.toString()}`;

//     checkWeather();
//     // } else if (!city) {
//     //   errorEl.textContent = "Please enter a city name";
//     // } else if (city === "") {
//     //   errorEl.textContent = "please enter city name";
//     // } else if (!city) {
//     //   errorEl.textContent = "Invalid city name";
//   } else {
//     errorEl.textContent = "please enter a city name";
//   }
// });

// document.querySelector(".submit-button").addEventListener("click", function () {
//   const city = document.querySelector(".search-city").value.trim();
//   const errorEl = document.querySelector(".error");

//   if (!city) {
//     errorEl.textContent = "Please enter a city name.";
//     errorEl.style.display = "block";
//     return;
//   }

//   // Use OpenWeatherMap API to check if city is valid
//   const apiKey = "YOUR_API_KEY"; // replace with your actual API key
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // City is valid - redirect
//       window.location.href = `weather.html?city=${city.toString()}`;
//     })
//     .catch((error) => {
//       // Show error message
//       errorEl.textContent = "Invalid city name. Please try again.";
//       errorEl.style.display = "block";
//     });
// });
document.querySelector(".submit-button").addEventListener("click", function () {
  const city = document.querySelector(".search-city").value.trim();
  const errorEl = document.querySelector(".error");

  // Hide error initially
  errorEl.style.display = "none";

  if (!city) {
    errorEl.textContent = "Please enter a city name.";
    errorEl.style.display = "block";
    return;
  }

  const apiKey = "c57dfd24348f4ccc95e131422251604";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.toString()}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // City is valid – redirect with query param
      window.location.href = `weather.html?city=${city.toString()}`;
    })
    .catch((error) => {
      // Show error if city is invalid
      errorEl.textContent = "Invalid city name. Please try again.";
      errorEl.style.display = "block";
    });
});
const toggle = document.getElementById("modeToggle");
const icon = document.querySelector(".icon");
const card = document.querySelector(".card-container");

toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  card.classList.toggle("dark-mode", isDark);
  icon.textContent = isDark ? "🌙" : "🌞";
});
