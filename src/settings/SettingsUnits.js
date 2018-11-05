import React, { Component } from "react";

const Units = ({ tempUnit, changeTempUnit }) => {
  return (
    <div className="SettingsUnits">
      <h2>Units</h2>
      <form value="Celsius">
        <label>
          Celsius
          <input
            type="radio"
            name="temp"
            value="Celsius"
            checked={tempUnit === "Celsius"}
            onChange={e => changeTempUnit(e.target.value)}
          />
        </label>

        <label>
          Fahrenheit
          <input
            type="radio"
            name="temp"
            value="Fahrenheit"
            checked={tempUnit === "Fahrenheit"}
            onChange={e => changeTempUnit(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Units;
