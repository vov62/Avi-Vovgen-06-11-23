import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import FavoriteBtn from "../favoriteBtn/FavoriteBtn";
import Spinner from "../Spinner";
import "./cityWeather.scss";

const CityWeather = () => {
  const { data } = useSelector((state) => state.data);
  const { city } = useParams();
  const [updatedData, setUpdatedData] = useState();

  useEffect(() => {
    setUpdatedData(data);
  }, [data, city]);

  return (
    <>
      {!updatedData || updatedData.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <CityWeatherCard />
          <FavoriteBtn />
        </>
      )}
    </>
  );
};

export default CityWeather;
