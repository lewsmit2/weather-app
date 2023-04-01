import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  console.log(endpoint);
  return (
    axios
      .get(endpoint)
      .then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(`Error fetching data: ${error}`))
  );
};

export default getForecast;
