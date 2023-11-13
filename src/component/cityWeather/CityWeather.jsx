import { useSelector } from "react-redux";
import "./cityWeather.scss";
import Card from "../weatherCard/Card";
import FavoriteBtn from "../favoriteBtn/FavoriteBtn";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
          <Card city={city} />
          <FavoriteBtn city={updatedData} />
        </>
      )}
    </>
  );
};

export default CityWeather;
