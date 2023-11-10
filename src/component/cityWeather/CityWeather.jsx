import { useSelector } from "react-redux";
import "./cityWeather.scss";
import Card from "../weatherCard/Card";
import FavoriteBtn from "../favoriteBtn/FavoriteBtn";
import Spinner from "../Spinner";

const CityWeather = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <>
      {!data || data.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Card />
          <FavoriteBtn city={data} />
        </>
      )}
    </>
  );
};

export default CityWeather;
