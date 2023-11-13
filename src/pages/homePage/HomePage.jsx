import CityWeather from "../../component/cityWeather/CityWeather";
import ForecastLIst from "../../component/forcecastList/forecastLIst";
import SearchBox from "../../component/header/searchbox/SearchBox";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <section>
          <SearchBox />
        </section>
        <section className="card-wrapper">
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
