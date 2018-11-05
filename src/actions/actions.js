import * as actionTypes from "./actionTypes";

export function checkIsCityHottest(id) {
  return { type: actionTypes.CHECK_IS_CITY_HOTTEST, id };
}

export function changeTempUnit(newUnit) {
  return { type: actionTypes.CHANGE_TEMP_UNIT, newUnit };
}

export function getNextCities() {
  return { type: actionTypes.GET_NEXT_CITIES };
}