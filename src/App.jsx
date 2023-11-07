import "./App.css";
import Header from "./component/header/Header";
import Favorite from "./pages/favorite/Favorite";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
