import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import { getNextCities } from "../actions/actions";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

const Result = ({ cities, title, score, getNextCities, tempUnit }) => {
  return (
    <div>
      {" "}
      <MainHeader title={title} score={score} />
      <Cities>
        {cities.map(city => (
          <City {...city.data} key={city.data.id} unit={tempUnit} />
        ))}
      </Cities>
      <Link to="/" ><button onClick={getNextCities}>Next Cities</button></Link>
    </div>
  );
};

function getTitle(bool) {
  return `You ${bool ? "WON!" : "LOST!"}`;
}

const mapStateToProps = state => {
  let { history, score, tempUnit } = state;
  let latest = history[history.length - 1];
  return {
    title: getTitle(latest.won),
    cities: latest.cities,
    score,
    tempUnit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNextCities: () => dispatch(getNextCities())
  };
};

const ResultPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default ResultPage;