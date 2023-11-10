import CityWeather from "../../component/cityWeather/CityWeather";
import ForecastLIst from "../../component/forcecastList/forecastLIst";
import SearchBox from "../../component/header/searchbox/SearchBox";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div>
          <SearchBox />
        </div>
        <section className="card-wrapper">
          {/* להחליף בהמשך לבדוק אם זה לא ריק */}
          {/* {cityWeather ? <Card data={cityWeather} /> : <p>No data available</p>} */}
          {/* <Card data={cityWeather} /> */}
          {/* <Card /> */}

          <CityWeather />
        </section>

        <section>
          <ForecastLIst />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
