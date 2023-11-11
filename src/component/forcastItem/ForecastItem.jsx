import "./forecastItem.scss";

const ForecastItem = ({ item, forecastDays }) => {
  // console.log(item);

  if (!item) {
    return null; // or display an error message
  }

  const description = item.weather[0]?.description || "No Description";
  const iconUrl =
    `http://openweathermap.org/img/w/${item.weather[0]?.icon}.png` ||
    "default-icon.png";
  const tempMax = item.main?.temp_max || 0;
  const tempMin = item.main?.temp_min || 0;

  return (
    <>
      <div className="forecast-card">
        <div className="forecast-card-desc">
          <div className="forecast-card-day">
            <h3>{forecastDays}</h3>
          </div>
          <img src={iconUrl} alt="icon" />
          <div className="forecast-temp">
            <h2>{description}</h2>

            <p>
              {Math.round(tempMax)}&deg; - {""}
              <span>{Math.round(tempMin)}&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastItem;
