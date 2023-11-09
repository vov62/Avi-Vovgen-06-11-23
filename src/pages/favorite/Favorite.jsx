import { useSelector } from "react-redux";

const Favorite = () => {
  const favorites = useSelector((state) => state.data.favorites);
  // console.log(favorites);

  return (
    <div>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          border: "#000 1px solid",
          // height: "100vh",
        }}
      >
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((favorite) => (
              <div className="card" key={favorite.id}>
                <li>
                  <p className="card-top-city-details">{favorite.name}</p>
                  <p>{favorite.weather[0].description}</p>
                  <p>{Math.round(favorite.main.temp)}&#8451;</p>
                  {/* Add more details as needed */}
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <p>No favorites added</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
