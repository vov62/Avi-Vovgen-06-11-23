import ForecastLIst from "../../component/forcecastList/forecastLIst";
import SearchBox from "../../component/header/searchbox/SearchBox";
import Card from "../../component/weatherCard/Card";
// import icon from "../../assets/icons/01d.png";
// import rainicon from "../../assets/icons/10n.png";
// import cityData from "../../../city.json";

import "./homePage.scss";
import { useSelector } from "react-redux";

const HomePage = () => {
  // const forecastData = [
  //   {
  //     id: 1,
  //     day: "Sun",
  //     temp: 18,
  //     lowTemp: -2,
  //     img: icon,
  //   },
  //   {
  //     id: 2,
  //     day: "Mon",
  //     temp: 16,
  //     lowTemp: -2,
  //     img: rainicon,
  //   },
  //   {
  //     id: 3,
  //     day: "Tue",
  //     temp: 35,
  //     lowTemp: -2,
  //     img: icon,
  //   },
  //   {
  //     id: 4,
  //     day: "Wed",
  //     temp: 20,
  //     lowTemp: -2,
  //     img: icon,
  //   },
  //   {
  //     id: 5,
  //     day: "Thu",
  //     temp: 30,
  //     lowTemp: -2,
  //     img: icon,
  //   },
  // ];

  // const cityData = useSelector((state) => state.data.data);
  const cityData = useSelector((state) => state.data.data);

  // console.log(cityWeather);

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

          <Card />
        </section>

        <section>
          <ForecastLIst />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
