import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CelsiusToFahrenheit } from "../../util/util";

const FavoriteCard = ({ data }) => {
  const tempUnit = useSelector((state) => state.data.tempUnit);
  const iconUrl = `https://openweathermap.org/img/w/`;

  return (
    <>
      {data ? (
        <div key={data.id}>
          <Link className="forecast-card">
            <div className="forecast-card-desc">
              <div className="forecast-card-day">{data.name}</div>
              <img
                src={`${iconUrl}${data.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <div className="forecast-temp">
                <p>{data.weather[0].description}</p>
                <p>{CelsiusToFahrenheit(data.main.temp, tempUnit)}</p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <p>Add Favorite</p>
      )}
    </>
  );
};

export default FavoriteCard;
