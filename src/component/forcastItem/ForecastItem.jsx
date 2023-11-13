import { useSelector } from "react-redux";
import { CelsiusToFahrenheit } from "../../util/util";
import "./forecastItem.scss";

const ForecastItem = ({ item, forecastDays }) => {
  const tempUnit = useSelector((state) => state.data.tempUnit);
  const { main, weather } = item;
  const iconUrl =
    `https://openweathermap.org/img/w/${weather[0]?.icon}.png` ||
    "default-icon.png";

  return (
    <>
      <div className="forecast-card">
        <div className="forecast-card-desc">
          <div className="forecast-card-day">
            <h3>{forecastDays}</h3>
          </div>
          <img src={iconUrl} alt="Weather Icon" />
          <h4>{CelsiusToFahrenheit(main.temp, tempUnit)}</h4>
          <div className="forecast-temp">
            <h2>{weather[0].description}</h2>
            <p>
              {CelsiusToFahrenheit(main.temp_max, tempUnit)} - {""}
              <span>{CelsiusToFahrenheit(main.temp_min, tempUnit)}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastItem;
