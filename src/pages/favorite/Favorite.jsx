import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./favorite.scss";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const favorites = useSelector((state) => state.data.favorites);
  const navigate = useNavigate();

  // console.log(favorites);

  // const [favLocal, setFavLocal] = useState({});

  // useEffect(() => {
  //   setFavLocal(JSON.parse(localStorage.getItem("favorite")) || []);
  // }, []);

  // console.log(favLocal);

  return (
    <div className="favorite-container">
      <div className="favorite-goBack-btn" onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
      </div>
      <h1>Favorite City</h1>
      <div className="favorite-wrapper">
        {favorites.length > 0 ? (
          <div className="card-container">
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
