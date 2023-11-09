import axios from "axios";

const fetchCityData = async (city) => {
  try {
    const cityDataRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=727ddd05780d3c1b268c8c0d84399bec&units=metric`
    );

    const { lat, lon } = cityDataRes.data.coord;
    // const { cityCode } = cityDataRes.name;
    // console.log(cityCode);

    // Use the coordinates to fetch the 5-day forecast
    const forecastDataRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=727ddd05780d3c1b268c8c0d84399bec&units=metric`
    );

    // return response.data;

    // console.log(cityDataRes.data);

    return { cityData: cityDataRes.data, forecastData: forecastDataRes.data };
  } catch (error) {
    return error;
  }
};

export default fetchCityData;
