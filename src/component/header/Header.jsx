import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { TOGGLE_TEMP_UNIT } from "../../feature/fetchDataSlice";
import { TOGGLE_THEME } from "../../feature/themeSlice";
import "./header.scss";

const Header = () => {
  const data = useSelector((state) => state.data);
  const { favorites, tempUnit } = data;
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleToggleUnit = () => {
    dispatch(TOGGLE_TEMP_UNIT());
  };

  const handleThemeToggle = () => {
    dispatch(TOGGLE_THEME());
  };

  return (
    // <div className="container">
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <div className="wrapper">
        <div className="logo">
          <h2>Weather app</h2>
        </div>

        <nav className="navBar">
          <div className="navbar-menu-hamburger" onClick={toggleMobileMenu}>
            <MenuIcon />
          </div>

          <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="link-btn">
                Home
              </Link>
            </li>

            <div className="fav-btn">
              <li>
                <Link to="/Favorite" className="link-btn">
                  Favorite
                </Link>
              </li>
              <div className="fav-icon">
                {favorites.length > 0 ? (
                  <FavoriteOutlinedIcon style={{ fill: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </div>
            </div>
            <div className="temperature-toggle">
              <button onClick={handleToggleUnit}>
                {tempUnit === "celsius" ? "F" : "C"}
              </button>
            </div>
            <div className="darkMode-btn">
              <button onClick={handleThemeToggle}>
                {darkMode ? (
                  <LightModeTwoToneIcon />
                ) : (
                  <DarkModeIcon style={{ fill: "#333" }} />
                )}
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
