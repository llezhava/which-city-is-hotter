import React, { Component } from "react";

const Units = props => {
  return (
    <div className="SettingsUnits">
    <h2>Units</h2>
      <form>
        <label for="celsius">Celsius</label>
        <input type="radio" name="temp" value="celsius" checked />
        
        <label for="fahrenheit">Fahrenheit</label>
        <input type="radio" name="temp" value="fahrenheit" />
      </form>
    </div>
  );
};

export default Units;
