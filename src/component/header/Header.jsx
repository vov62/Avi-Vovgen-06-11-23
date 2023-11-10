import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const favorite = useSelector((state) => state.data.favorites);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container">
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
                {favorite.length > 0 ? (
                  <FavoriteOutlinedIcon style={{ fill: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
