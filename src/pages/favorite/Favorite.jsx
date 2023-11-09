import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./favorite.scss";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const favorites = useSelector((state) => state.data.favorites);

  console.log(favorites);

  // const [favLocal, setFavLocal] = useState({});

  // useEffect(() => {
  //   setFavLocal(JSON.parse(localStorage.getItem("favorite")) || []);
  // }, []);

  // console.log(favLocal);

  return (
    <div className="favorite-container">
      <div className="favorite-goBack-btn">
        <KeyboardBackspaceIcon />
      </div>
      <h1>Favorite City</h1>
      <div className="favorite-wrapper">
        {favorites ? (
          <div className="card-container">
            <FavoriteCard data={favorites} />
          </div>
        ) : (
          <p>No favorites added</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
