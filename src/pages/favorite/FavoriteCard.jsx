import { useSelector } from "react-redux";

const FavoriteCard = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/w/`;

  const selectDa = useSelector((state) => state.data);
  const { isLoading } = selectDa;

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data &&
        data.map((item) => (
          <div key={item.id}>
            <div className="forecast-card">
              <p className="card-top-city-details">{item.name}</p>
              <img src={`${iconUrl}${item.weather[0].icon}.png`} alt="icon" />
              <p>{item.weather[0].description}</p>
              <p>{Math.round(item.main.temp)}&#8451;</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default FavoriteCard;
