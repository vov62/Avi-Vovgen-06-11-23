import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteCard from "./FavoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_CITY } from "../../redux/feature/fetchDataSlice.js";
import "./favorite.scss";

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.data.favorites);

  const cardClickHandler = (city) => {
    dispatch(SET_CURRENT_CITY(city));
    navigate("/");
  };

  return (
    <div className="favorite-container">
      <div className="favorite-goBack-btn" onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon className="favorite-goBack-icon" />
      </div>
      <h1>Favorites</h1>
      <div className="favorite-wrapper">
        {favorites.length > 0 ? (
          <div className="favorite-card-container">
            {favorites.map((item) => (
              <div key={item.id} onClick={() => cardClickHandler(item)}>
                <FavoriteCard key={item.id} data={item} />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Add Favorite</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
