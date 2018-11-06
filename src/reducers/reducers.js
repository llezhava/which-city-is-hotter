import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { cities } from "../services/cityIds";

export default function game(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TEMP_UNIT:
      return Object.assign({}, state, { tempUnit: action.newUnit });
    case types.CHECK_IS_CITY_HOTTEST:
      return checkHottestCity(state, action);
    case types.START_FETCHING_CITIES:
      return startFetchingCities(state, action);
    case types.ADD_FETCHED_CITIES:
      return addFetchedCities(state, action);
    default:
      return state;
  }
}

// TODO: Rewrite this function
// IF two cities are equal, return true
function checkHottestCity(state, action) {
  let { score, currentCities, history } = state;

  let currentCitiesSorted = currentCities.sort((a, b) => {
    if (a.temp > b.temp) return -1;
    if (a.temp < b.temp) return 1;
    else return 0;
  });

  let isHighest = currentCitiesSorted[0].id === action.id;

  if (isHighest) {
    score += 1;
  }

  let newHistory = history.concat({
    cities: [...state.currentCities],
    won: isHighest
  });

  return Object.assign({}, state, {
    score,
    history: newHistory
  });
}

function startFetchingCities(state, action) {
  return Object.assign({}, state, {
    currentCities: [
      { data: {}, isFetching: true },
      { data: {}, isFetching: true }
    ]
  });
}

function addFetchedCities(state, action) {
  let currentCities = action.dataList.map(data => {
    try {
      let { main, sys, name, id } = data;
      let temp = main.temp;
      let country = sys.country;
      return { data: { name, country, temp, id }, isFetching: false };
    } catch (err) {
      console.log(data, err);
      return { data: {}, isFetching: true };
    }
  });

  return Object.assign({}, state, {
    currentCities
  });
}
