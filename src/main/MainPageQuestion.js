import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import Clickable from "../common/Clickable";
import { checkIsCityHottest } from "../actions/actions";
import { connect } from "react-redux";

const Question = ({ cities, score, isItBiggest }) => {
  return (
    <div>
      {" "}
      <MainHeader title="Which City is hotter?" score={score} />
      <Cities>
        {cities.map(city => (
          <Clickable fn={() => isItBiggest(city.id)}>
            <City {...city} key={city.id} temp={undefined} />
          </Clickable>
        ))}
      </Cities>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cities: state.currentCities,
    score: state.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isItBiggest: id => dispatch(checkIsCityHottest(id))
  };
};

const QuestionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

export default QuestionPage;