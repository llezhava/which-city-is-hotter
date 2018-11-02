import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Cities from "../common/Cities";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        this.createCity("Berlin", "Germany", 15, 1592),
        this.createCity("Auckland", "New Zealand", 12, 14520)
      ],
      score: 0
    };
  }

  createCity(name, country, temp, id) {
    return { name, country, temp, id };
  }

  isItBiggest(id) {
    console.log(id);
    return true;
  }

  render() {
    return (
      <div>
        <MainHeader title="Which City is hotter?" score={this.state.score} />
        <Cities cities={this.state.cities} onClick={this.isItBiggest} />
      </div>
    );
  }
}

export default MainPage;
