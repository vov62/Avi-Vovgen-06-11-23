import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../../feature/fetchDataSlice";
import { toast } from "react-toastify";

const FavoriteBtn = ({ city }) => {
  // const { data, favorites } = useSelector((state) => state.data);
  const { data, favorites } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(ADD_TO_FAVORITES(city));

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
    dispatch(REMOVE_FROM_FAVORITES(city));
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
  );
};

export default FavoriteBtn;
