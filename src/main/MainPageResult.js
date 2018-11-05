import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import { getNextCities } from "../actions/actions";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

const Result = ({ cities, title, score, getNextCities }) => {
  return (
    <div>
      {" "}
      <MainHeader title={title} score={score} />
      <Cities>
        {cities.map(city => (
          <City {...city} key={city.id} />
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
  let { history, score } = state;
  let latest = history[history.length - 1];
  return {
    title: getTitle(latest.won),
    cities: latest.cities,
    score
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
