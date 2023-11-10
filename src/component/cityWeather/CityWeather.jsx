import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../../feature/fetchDataSlice";

// import Spinner from "../Spinner";
import { toast } from "react-toastify";

import "./cityWeather.scss";
import Card from "../weatherCard/Card";

const CityWeather = () => {
  const dispatch = useDispatch();
  const { data, favorites } = useSelector((state) => state.data);

  if (!data) {
    return <p>Data is incomplete, refresh the page</p>;
    // error
  }

  //   const { name, weather, main, wind, id } = data;

  //   if (!name || !weather || weather.length === 0 || !main || !wind) {
  //     return <p>loading...</p>;
  //   }

  //   const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const handleFavorite = () => {
    dispatch(ADD_TO_FAVORITES(data));

    toast.success("🦄 city add successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleRemove = () => {
    dispatch(REMOVE_FROM_FAVORITES(data));
    toast.error("🦄 remove done successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <Card />
      <div className="card-btn">
        {favorites.some((item) => item.id === data.id) ? (
          <button className="remove-btn" onClick={handleRemove}>
            <FavoriteBorderOutlinedIcon className="remove_icon" />
            remove from favorites
          </button>
        ) : (
          <button className="add-to-fav-btn" onClick={handleFavorite}>
            <FavoriteBorderOutlinedIcon />
            add to favorites
          </button>
        )}
      </div>
    </>
  );
};

export default CityWeather;
