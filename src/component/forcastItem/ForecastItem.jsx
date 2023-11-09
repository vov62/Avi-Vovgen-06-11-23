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
          <h3>{forecastDays}</h3>
          <h2>{description}</h2>

          <div className="forecast-icon">
            <img src={iconUrl} alt="icon" />
          </div>

          <div className="forecast-temp">
            <p>
              {Math.round(tempMax)}&deg; <span>{Math.round(tempMin)}&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastItem;
