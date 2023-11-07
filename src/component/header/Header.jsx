import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo">
          <h2>Weather app</h2>
        </div>

        {/* <div className="navBar">
          <Link to="/">
            <hutton className="link-btn">Home</hutton>
          </Link>

          <div className="fav-btn">
            <Link to="/Favorite">
              <hutton className="link-btn">Favorite</hutton>
            </Link>
            <div className="fav-icon">
              <FavoriteBorderOutlinedIcon />
              <FavoriteOutlinedIcon style={{ fill: "red" }} />
            </div>
          </div>
        </div> */}

        <nav className="navBar">
          <ul>
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
                <FavoriteBorderOutlinedIcon />
                {/* <FavoriteOutlinedIcon style={{ fill: "red" }} /> */}
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
