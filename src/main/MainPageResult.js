import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import { getNextCities } from "../state/actions/actions";


const Result = ({ cities, title, score, tempUnit, getNextCities }) => {
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

Result.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  score: PropTypes.number,
  tempUnit: PropTypes.string,
  getNextCities: PropTypes.func,
}

function getTitle(bool) {
  return `You ${bool ? "WON!" : "LOST!"}`;
}

const mapStateToProps = state => {
  let { history, score, tempUnit } = state;
  let latest = history[history.length - 1];
  return {
    title: latest ? getTitle(latest.won) : "Result Page",
    cities: latest ? latest.cities : [],
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