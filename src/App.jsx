import { useSelector } from "react-redux";
import "./App.css";
import Header from "./component/header/Header";
import Favorite from "./pages/favorite/Favorite";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/weather/:city" element={<HomePage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
