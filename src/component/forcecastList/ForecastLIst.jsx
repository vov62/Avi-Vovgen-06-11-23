import "./forecastList.scss";
import ForecastItem from "../forcastItem/ForecastItem";
import { useSelector } from "react-redux";

const ForecastLIst = () => {
  const forecastDataTwo = useSelector((state) => state.data.forecastData);
  const fiveDayForecast = forecastDataTwo?.list?.slice(0, 5) || [];

  // date
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  return (
    <div className="forecast-list">
      <div className="forecast-wrapper">
        {fiveDayForecast.length > 0 ? (
          fiveDayForecast.map((item, idx) => (
            <ForecastItem
              item={item}
              key={item.dt}
              forecastDays={forecastDays[idx]}
            />
          ))
        ) : (
          <p>No forecast data available</p>
        )}
      </div>
    </div>
  );
};

export default ForecastLIst;
