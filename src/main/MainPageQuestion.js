import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";
import City from "../common/City";
import Clickable from "../common/Clickable";
import IsFetching from "../common/IsFetching";
import Button from "../common/Button"
import styles from "./main.module.css"
import { checkIsCityHottest, getNextCities } from "../state/actions/actions";

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
        {cities.map((city, index) => (
          <IsFetching isFetching={city.isFetching} key={index} >
            <Clickable fn={() => isItBiggest(city.data.temp)} key={city.data.id}>
              <City {...city.data} key={city.data.id} temp={undefined} />
            </Clickable>
          </IsFetching>
        ))}
      </Cities>
      {hasError ? <div className={styles.error}> Failed to load cities -  <Button onClick={getCities}>Click here to retry</Button> </div>: ""}
    </div>
  );
};

Question.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  score: PropTypes.number,
  hasError: PropTypes.bool,
  isItBiggest: PropTypes.func,
  getCities: PropTypes.func
}

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
