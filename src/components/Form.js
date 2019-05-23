import React, { Component } from "react";

class Form extends Component {
  state = {};

  render() {
    return (
      <>
        <form onSubmit={this.props.getWeather}>
          <input
            type="text"
            name="city"
            placeholder="city..."
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <button>Get Weather!</button>
        </form>
      </>
    );
  }
}

export default Form;
