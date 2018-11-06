import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import Clickable from "../common/Clickable";
import IsFetching from "../common/IsFetching";
import { checkIsCityHottest, getNextCities } from "../state/actions/actions";
import { connect } from "react-redux";

class InitialCities extends Component {
  componentDidMount() {
    this.props.getCities();
  }
  render() {
    return <Question {...this.props}/>
  }
}

const Question = ({ cities, score, hasError, isItBiggest, getCities }) => {
  return (
    <div>
      {" "}
      <MainHeader title="Which City is hotter?" score={score} />
      <Cities>
        {cities.map(city => (
          <IsFetching isFetching={city.isFetching}>
            <Clickable fn={() => isItBiggest(city.data.temp)}>
              <City {...city.data} key={city.data.id} temp={undefined} />
            </Clickable>
          </IsFetching>
        ))}
      </Cities>
      {hasError ? <div> Encountered error. <button onClick={getCities}>Click here to retry</button> </div>: ""}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cities: state.currentCities,
    score: state.score,
    hasError: state.hasFetchingError
  };
};



const mapDispatchToProps = dispatch => {
  return {
    isItBiggest: id => dispatch(checkIsCityHottest(id)),
    getCities: () => dispatch(getNextCities())
  };
};



const QuestionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialCities);

export default QuestionPage;
