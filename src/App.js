import "./app.css";
import { Route, Routes } from "react-router";
import { Suspense } from "react";
import {
  CoinDetails,
  CryptoCurrencies,
  Exchanges,
  Home,
  Loader,
  Navbar,
  News,
} from "./components";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/coin/:id" element={<CoinDetails />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
