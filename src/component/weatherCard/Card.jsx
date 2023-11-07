import sun from "../../assets/icons/01d.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./card.scss";
const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <div className="card-top-city-details">
            <p className="card--top-city-name">{data.name}</p>
            <p className="card-city-weather-desc">
              {data.weather[0].description}
            </p>
            <p className="card-city-weather-desc">14:30PM</p>
          </div>
          <img
            // src={`icons/${data.weather[0].icon}.png`}
            src={sun}
            alt="sun"
            className="card-weather-icon"
          />
        </div>

        <div className="card-bottom">
          <h2>{Math.round(data.main.temp)}&#8451;</h2>
          <div className="card-bottom-city-details">
            <h4>Details</h4>
            <div className="card-details">
              <h5>Feels Like </h5>
              <span>{Math.round(data.main.feels_like)}&#8451;</span>

              <h5>Wind</h5>
              <span>{data.wind.speed} m/s</span>
              <h5>Humidity</h5>
              <span>{data.main.humidity}%</span>
              <h5>Pressure</h5>
              <span>{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-btn">
        <button className="add-to-fav-btn">
          <FavoriteBorderOutlinedIcon />
          add to favorite
        </button>
        {/* <button className="remove-btn">
              <FavoriteOutlinedIcon className="remove_icon"/>
              remove from favorite
            </button> */}
      </div>
    </>
  );
};

export default Card;
