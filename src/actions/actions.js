import * as actionTypes from "./actionTypes";
import fetchCities from "../services/api"

export function checkIsCityHottest(id) {
  return { type: actionTypes.CHECK_IS_CITY_HOTTEST, id };
}

export function changeTempUnit(newUnit) {
  return { type: actionTypes.CHANGE_TEMP_UNIT, newUnit };
}

export function getNextCities() {
  return dispatch => {
    dispatch(startFetchingCities());
    return fetchCities()
      .then(cityList => dispatch(addFetchedCities(cityList)))
  };
}

export function startFetchingCities() {
  return { type: actionTypes.START_FETCHING_CITIES };
}

export function addFetchedCities(dataList) {
  return { type: actionTypes.ADD_FETCHED_CITIES, dataList };
}
