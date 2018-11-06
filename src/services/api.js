import getCities from "./cityIds";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?id=`;
const appId = `&APPID=273b8acef6242f4d4f56770d6195d3c9`
const metric = `&units=metric`

export default function fetchCities() {
  let IDList = getCities();
  let fetchCities = IDList.map(id =>
    fetch(baseUrl + id + appId + metric).then(response => response.json())
  );

  return Promise.all(fetchCities);
}