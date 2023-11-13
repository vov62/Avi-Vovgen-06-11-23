import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../../redux/feature/fetchDataSlice.js";
import { toast } from "react-toastify";
import "./favoriteBtn.scss";

const FavoriteBtn = () => {
  const { data, favorites } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(ADD_FAVORITE(data));

    toast.success("city add successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      msTransition: "bounce",
      className: "custom-toast",
    });
  };

  const removeFavorite = () => {
    dispatch(REMOVE_FAVORITE(data.id));
    toast.error("remove done successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      msTransition: "bounce",
      className: "custom-toast",
    });
  };

  return (
    <div className="card-btn">
      {favorites.some((city) => city.id === data.id) ? (
        <button className="remove-btn" onClick={removeFavorite}>
          <FavoriteBorderOutlinedIcon />
          remove from favorites
        </button>
      ) : (
        <button className="add-to-fav-btn" onClick={handleFavorite}>
          <FavoriteBorderOutlinedIcon />
          add to favorites
        </button>
      )}
    </div>
  );
};

export default FavoriteBtn;
