import "./forecastList.scss";
import ForecastItem from "../forcastItem/ForecastItem";
// import forcecast from "../../../forecast.json";

const ForecastLIst = ({ data }) => {
  return (
    <div className="forecast-list">
      <div className="forecast-title">
        <h2>5-day forecast</h2>
      </div>

      <div className="forecast-wrapper">
        {data?.map((item) => (
          <ForecastItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ForecastLIst;
