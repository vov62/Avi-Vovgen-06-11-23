import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./searchBox.scss";

const SearchBox = () => {
  return (
    <div className="search-wrapper">
      <SearchOutlinedIcon className="search-icon" />
      <input type="text" placeholder="enter city..." />
    </div>
  );
};

export default SearchBox;
