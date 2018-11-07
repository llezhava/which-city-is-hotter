import * as actionTypes from "./types";
import fetchCities from "../../services/api";

export function checkIsCityHottest(temp) {
  return { type: actionTypes.CHECK_WINNER, temp };
}

export function changeTempUnit(newUnit) {
  return { type: actionTypes.CHANGE_TEMP_UNIT, newUnit };
}

export function getNextCities() {
  return dispatch => {
    dispatch(fetchCitiesStart());
    return fetchCities()
      .then(cityList => dispatch(fetchCitiesAdd(cityList)))
      .catch(error => dispatch(fetchCitiesFailure()));
  };
}

export function fetchCitiesStart() {
  return { type: actionTypes.FETCH_CITIES_START };
}

export function fetchCitiesAdd(dataList) {
  return { type: actionTypes.FETCH_CITIES_ADD, dataList };
}

export function fetchCitiesFailure() {
  return { type: actionTypes.FETCH_CITIES_FAILURE };
}
