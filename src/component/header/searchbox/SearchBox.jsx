import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./searchBox.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA_FETCH_REQUESTED } from "../../../feature/fetchDataSlice";
import { UPDATE_SEARCH, RESET_SEARCH } from "../../../feature/searchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const textValue = useSelector((state) => state.search.cityName);
  // const [textValue, setTextValue] = useState("rome");

  const handleSearch = () => {
    if (textValue) {
      const englishPattern = /^[A-Za-z\s]+$/;
      englishPattern.test(textValue)
        ? dispatch(DATA_FETCH_REQUESTED(textValue))
        : console.log("Please enter only English characters");
    }
    dispatch(RESET_SEARCH());
  };

  useEffect(() => {
    // debugger;
    dispatch(DATA_FETCH_REQUESTED(textValue));
    dispatch(RESET_SEARCH());
  }, []);

  return (
    <div className="search-wrapper">
      <SearchOutlinedIcon className="search-icon" />
      <input
        type="text"
        placeholder="enter city..."
        value={textValue}
        onChange={(e) => dispatch(UPDATE_SEARCH(e.target.value))}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
