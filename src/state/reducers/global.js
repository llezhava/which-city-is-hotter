import * as types from "../actions/types";

import initialState from "./initialState";

export default function game(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TEMP_UNIT:
      return Object.assign({}, state, { tempUnit: action.newUnit });
    case types.CHECK_WINNER:
      return checkWinner(state, action);
    case types.FETCH_CITIES_START:
      return fetchCitiesStart(state, action);
    case types.FETCH_CITIES_ADD:
      return fetchCitiesAdd(state, action);
    case types.FETCH_CITIES_FAILURE:
      return Object.assign({}, state, { hasFetchingError: true });
    default:
      return state;
  }
}

function checkWinner(state, action) {
  let { score, currentCities, history } = state;

  let isWinner = [...currentCities].every(c => action.temp >= c.data.temp);

  if (isWinner) score += 1;

  let _history = history.concat({
    cities: [...state.currentCities],
    won: isWinner
  });

  return Object.assign({}, state, {
    score,
    history: _history
  });
}

function fetchCitiesStart(state, action) {
  return Object.assign({}, state, {
    currentCities: [
      { data: {}, isFetching: true },
      { data: {}, isFetching: true }
    ],
    hasFetchingError: false
  });
}

function fetchCitiesAdd(state, action) {
  let currentCities = action.dataList.map(data => {
    try {
      let { main, sys, name, id } = data;
      let temp = main.temp;
      let country = sys.country;
      return { data: { name, country, temp, id }, isFetching: false };
    } catch (err) {
      return undefined;
    }
  });

  let hasError = currentCities.includes(undefined);

  if (hasError) return fetchCitiesFailure(state, action);
  else
    return Object.assign({}, state, {
      currentCities
    });
}

function fetchCitiesFailure(state, action) {
  return Object.assign({}, state, { hasFetchingError: true });
}