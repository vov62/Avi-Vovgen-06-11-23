import axios from "axios";

const fetchCityData = async (city) => {
  const base_url = "https://api.openweathermap.org/data/2.5";

  try {
    const cityDataRes = await axios.get(
      `${base_url}/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );

    const { lat, lon } = cityDataRes.data.coord;

    const forecastDataRes = await axios.get(
      `${base_url}/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );

    return { cityData: cityDataRes.data, forecastData: forecastDataRes.data };
  } catch (error) {
    return error;
  }
};

export default fetchCityData;
