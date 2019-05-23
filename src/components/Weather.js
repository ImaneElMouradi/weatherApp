import React from "react";

function Weather(props) {
  const { temperature, city, humidity, description, error } = props;
  const temp = Math.round(temperature - 273);
  return (
    <>
      <div className="weather__info">
        {city && (
          <p className="weather__key">
            City:
            <span className="weather__value"> {city}</span>
          </p>
        )}

        {temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value"> {temp} °C</span>
          </p>
        )}

        {humidity && (
          <p className="weather__key">
            Humidity:
            <span className="weather__value"> {humidity}</span>
          </p>
        )}
        {description && (
          <p className="weather__key">
            Description:
            <span className="weather__value"> {description}</span>
          </p>
        )}
      </div>
      <div className="weather__error weather__value">
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default Weather;
