import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_FAVORITE } from "../../feature/fetchDataSlice";
import "./card.scss";
import { useEffect } from "react";
import fetchCityData from "../../api/api";

import Spinner from "../Spinner";

const Card = () => {
  const dispatch = useDispatch();

  const cityData = useSelector((state) => state.data);
  const { isLoading, data, error } = cityData;

  if (!data) {
    return <p>Data is incomplete.</p>;
  }
  const { name, weather, main, wind } = data;
  if (!name || !weather || weather.length === 0 || !main || !wind) {
    return <p>loading...</p>;
  }
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const handleFavorite = () => {
    dispatch(ADD_TO_FAVORITE(data));
    // console.log("click", city);
  };

  return (
    <>
      {isLoading && <div>loading..</div>}
      <div className="card">
        <div className="card-top">
          <div className="card-top-city-details">
            <p className="card--top-city-name">{name}</p>
            <p className="card-city-weather-desc">{weather[0].description}</p>
            <p className="card-city-weather-desc">14:30PM</p>
          </div>
          {/* <img src={sun} alt="sun" className="card-weather-icon" /> */}
          <img
            // src={`http://openweathermap.org/img/wn${weather[0].icon}.png`}
            src={iconUrl}
            alt="sun"
            className="card-weather-icon"
          />
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
      <div className="card-btn">
        <button className="add-to-fav-btn" onClick={handleFavorite}>
          <FavoriteBorderOutlinedIcon />
          add to favorite
        </button>
        {/* <button className="remove-btn">
          <FavoriteBorderOutlinedIcon className="remove_icon" />
          remove from favorite
        </button> */}
      </div>
    </>
  );
};

export default Card;
