import React from "react";

function Form(props) {
  return (
    <>
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city..." />
        <button>Get Weather!</button>
      </form>
    </>
  );
}

export default Form;
