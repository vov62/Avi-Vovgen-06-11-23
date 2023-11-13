import axios from "axios";

const fetchCityData = async (city) => {
  const base_url = "https://api.openweathermap.org/data/2.5";

  try {
    const cityDataRes = await axios.get(
      `${base_url}/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    if (cityDataRes.status !== 200) {
      throw new Error("Failed to fetch city weather");
    }
    const { lat, lon } = cityDataRes.data.coord;

    const forecastDataRes = await axios.get(
      `${base_url}/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );

    if (forecastDataRes.status !== 200) {
      throw new Error("Failed to fetch forecast weather");
    }
    const cityData = await cityDataRes.data;
    const cityForecast = await forecastDataRes.data;
    return { cityData, cityForecast };
  } catch (error) {
    return error.message;
  }
};

export default fetchCityData;
