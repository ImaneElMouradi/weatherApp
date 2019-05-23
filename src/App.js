import React, { Component } from "react";
import "./App.css";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "e372fb56db679eef415ca09a48db4a1a";

class App extends Component {
  state = {
    value: "",
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: false
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description
    });
  };

  render() {
    return (
      <>
        <Titles />
        <Form
          getWeather={this.getWeather}
          value={this.state.value}
          handleChange={this.handleChange}
        />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </>
    );
  }
}

export default App;
