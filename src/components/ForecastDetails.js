import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
  const { date, humidity, temperature, wind } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature-max">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature-min">
        Min Temperature: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {wind.speed}
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
