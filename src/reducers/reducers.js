import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function game(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TEMP_UNIT:
      return Object.assign({}, state, { tempUnit: action.newUnit });
    case types.CHECK_IS_CITY_HOTTEST:
      return checkHottestCity(state, action);
    default:
      return state;
  }
}

function checkHottestCity(state, action) {
  let { score, currentCities, history } = state;

  let currentCitiesSorted = currentCities.sort((a, b) => {
    if (a.temp < b.temp) return -1;
    if (a.temp > b.temp) return 1;
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
    currentCities: [],
    score,
    history: newHistory
  });
}
