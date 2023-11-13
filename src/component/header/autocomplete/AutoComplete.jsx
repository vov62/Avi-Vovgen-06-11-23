import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA_FETCH_FAILED } from "../../../redux/feature/fetchDataSlice";
import axios from "axios";
import Spinner from "../../Spinner";
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
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
          {
            params: {
              apikey: `${import.meta.env.VITE_AUTOCOM_API_KEY}`,
              q: query,
            },
          }
        );

        setSuggestions(response.data);
      } catch (error) {
        dispatch(DATA_FETCH_FAILED(error.message));
        setSuggestions(null);
      }
    };

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 500);

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner size={30} />
          </div>
        </>
      )}

      {!suggestions && error && (
        <p className="autocomplete-container-error">
          No matching cities found, add another city or refresh the page
        </p>
      )}
    </div>
  );
};

export default AutocompleteSuggestions;
