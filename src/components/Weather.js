import React, { Component } from "react";

class Weather extends Component {
  state = {};

  render() {
    const { temperature, city, humidity, description, error } = this.props;
    return (
      <>
        {city && <p>City: {city}</p>}
        {temperature && <p>Temperature: {temperature}</p>}
        {humidity && <p>Humidity: {humidity}</p>}
        {description && <p>Description: {description}</p>}
      </>
    );
  }
}

export default Weather;
