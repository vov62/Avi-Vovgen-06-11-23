import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import "./card.scss";

const Card = () => {
  const cityData = useSelector((state) => state.data);
  const { isLoading, data } = cityData;
  // console.log(data);

  // const date = data?.timezone;

  // const utcTime = new Date(data.dt * 1000);
  // const localTime = new Date(utcTime.getTime() + date * 1000);
  // // console.log("Local Time:", localTime.toLocaleString());

  // // Formatting local time
  // const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  // const formattedTime = localTime.toLocaleTimeString(undefined, timeOptions);
  // console.log("Formatted Time:", formattedTime);

  const { name, weather, main, wind } = data;

  if (!name || !weather || weather.length === 0 || !main || !wind) {
    return <Spinner />;
  }

  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="card">
            <div className="card-top">
              <div className="card-top-city-details">
                <p className="card--top-city-name">{name}</p>
                <p className="card-city-weather-desc">
                  {weather[0].description}
                </p>
                <p className="card-city-weather-desc">10:00PM</p>
              </div>
              <img src={iconUrl} alt="sun" className="card-weather-icon" />
            </div>
            <div className="card-bottom">
              <h2>{Math.round(main.temp)}&#8451;</h2>
              <div className="card-bottom-city-details">
                <h4>Details</h4>
                <div className="card-details">
                  <h5>Feels Like</h5>
                  <span>{Math.round(main.feels_like)}&#8451;</span>

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
        </>
      )}
    </>
  );
};

export default Card;
