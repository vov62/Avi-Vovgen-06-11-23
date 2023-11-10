import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./searchBox.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA_FETCH_REQUESTED } from "../../../feature/fetchDataSlice";
import { UPDATE_SEARCH, RESET_SEARCH } from "../../../feature/searchSlice";
import AutocompleteSuggestions from "../autocomplete/AutoComplete";

const SearchBox = () => {
  const dispatch = useDispatch();
  const textValue = useSelector((state) => state.search.cityName);
  // console.log(textValue);

  const handleSearch = () => {
    if (textValue) {
      const englishPattern = /^[A-Za-z\s]+$/;
      englishPattern.test(textValue)
        ? dispatch(DATA_FETCH_REQUESTED(textValue))
        : alert("Please enter only English characters");
    }
    dispatch(RESET_SEARCH());
  };

  const handleSelectSuggestion = (suggestion) => {
    dispatch(UPDATE_SEARCH(suggestion.LocalizedName));
    dispatch(DATA_FETCH_REQUESTED(suggestion.LocalizedName));
    dispatch(RESET_SEARCH());
  };

  useEffect(() => {
    if (textValue) {
      dispatch(DATA_FETCH_REQUESTED(textValue));
      dispatch(RESET_SEARCH());
    }
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <SearchOutlinedIcon className="search-icon" />
        <input
          type="text"
          placeholder="enter city..."
          value={textValue}
          onChange={(e) => dispatch(UPDATE_SEARCH(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      <div>
        {textValue && (
          <div>
            <AutocompleteSuggestions
              query={textValue}
              onSelect={handleSelectSuggestion}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
