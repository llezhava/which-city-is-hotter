const celsius = "Celsius";
const fahrenheit = "Fahrenheit";

const city1 = { name: "Berlin", country: "Germany", temp: 15, id: 955 };
const city2 = { name: "Munich", country: "Germany", temp: 5, id: 219 };

export default {
  tempUnit: celsius,
  score: 0,
  currentCities: [
    // { data: city1, isFetching: false },
    // { data: city2, isFetching: false }
  ],
  history: [{ cities: [city1, city2], won: true }]
};
