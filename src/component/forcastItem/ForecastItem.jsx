import "./forecastItem.scss";

const ForecastItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="forecast-card">
      <div className="forecast-card-desc">
        <h2>{item.day}</h2>

        <div className="forecast-icon">
          <img src={item.img} alt="icon" />
        </div>

        <div className="forecast-temp">
          <p>
            {item.temp}&deg; <span>{item.lowTemp}&deg;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
