import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
