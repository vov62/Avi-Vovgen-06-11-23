import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA_FETCH_FAILED } from "../../../redux/feature/fetchDataSlice";
import axios from "axios";
import "./autocomplete.scss";

const AutocompleteSuggestions = ({ query, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);
  const error = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
          {
            params: {
              apikey: `${import.meta.env.VITE_WEATHER_API_KEY}`,
              q: query,
            },
          }
        );

        const resData = await response.data;
        setSuggestions(resData);
      } catch (error) {
        dispatch(DATA_FETCH_FAILED(error.message));
        setSuggestions(null);
      }
    };

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 1000);

    if (query.trim() !== "") {
      debouncedFetchSuggestions();
    } else {
      setSuggestions([]);
    }

    return () => clearTimeout(debouncedFetchSuggestions);
  }, [query, dispatch]);

  return (
    <div className="autocomplete-container">
      {suggestions && suggestions.length > 0 ? (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.Key} onClick={() => onSelect(suggestion)}>
              {suggestion.Country.LocalizedName}, {suggestion.LocalizedName}
            </li>
          ))}
        </ul>
      ) : (
        <>
          {!suggestions && error && (
            <p className="autocomplete-container-error">
              No matching cities found
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default AutocompleteSuggestions;
