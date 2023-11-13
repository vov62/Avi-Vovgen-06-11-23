import { useSelector } from "react-redux";
import { CelsiusToFahrenheit } from "../../util/util";
import "./cityWeatherCard.scss";

const CityWeatherCard = () => {
  const cityData = useSelector((state) => state.data.data);
  const tempUnit = useSelector((state) => state.data.tempUnit);

  const { name, weather, main, wind, sys } = cityData;
  const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-city-details">
          <p className="card--top-city-name">
            {name}, {sys.country}
          </p>
          <p className="card-city-weather-desc">{weather[0].description}</p>
          <p className="card-city-weather-desc">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <img src={iconUrl} alt="Weather Icon" className="card-weather-icon" />
      </div>
      <div className="card-bottom">
        <h2>{CelsiusToFahrenheit(main.temp, tempUnit)}</h2>
        <div className="card-bottom-city-details">
          <h4>Details</h4>
          <div className="card-details">
            <h5>Feels Like</h5>
            <span>{CelsiusToFahrenheit(main.feels_like, tempUnit)}</span>
            <h5>Wind</h5>
            <span>{wind.speed} m/s</span>
            <h5>Humidity</h5>
            <span>{main.humidity}%</span>
            <h5>Pressure</h5>
            <span>{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeatherCard;
