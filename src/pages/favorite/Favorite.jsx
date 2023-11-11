import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteCard from "./FavoriteCard";
import "./favorite.scss";

const Favorite = () => {
  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorite-container">
      <div className="favorite-goBack-btn" onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon className="favorite-goBack-icon" />
      </div>
      <h1>Favorites</h1>
      <div className="favorite-wrapper">
        {favorites.length > 0 ? (
          <div className="favorite-card-container">
            <FavoriteCard data={favorites} />
          </div>
        ) : (
          <div className="favorite-wrapper-noData">
            <p>No favorites added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
