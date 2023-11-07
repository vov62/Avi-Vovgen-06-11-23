import ForecastLIst from "../../component/forcecastList/forecastLIst";
import SearchBox from "../../component/header/searchbox/SearchBox";
import Card from "../../component/weatherCard/Card";
import icon from "../../assets/icons/01d.png";
import rainicon from "../../assets/icons/10n.png";
import cityData from "../../../city.json";

import "./homePage.scss";

const HomePage = () => {
  const forecastData = [
    {
      id: 1,
      day: "Sun",
      temp: 18,
      lowTemp: -2,
      img: icon,
    },
    {
      id: 2,
      day: "Mon",
      temp: 16,
      lowTemp: -2,
      img: rainicon,
    },
    {
      id: 3,
      day: "Tue",
      temp: 35,
      lowTemp: -2,
      img: icon,
    },
    {
      id: 4,
      day: "Wed",
      temp: 20,
      lowTemp: -2,
      img: icon,
    },
    {
      id: 5,
      day: "Thu",
      temp: 30,
      lowTemp: -2,
      img: icon,
    },
  ];
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div>
          <SearchBox />
        </div>

        <section className="card-wrapper">
          <Card data={cityData} />
        </section>

        <section>
          <ForecastLIst data={forecastData} />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
