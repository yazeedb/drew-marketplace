import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Buy } from "./pages/Buy";
import { Sell } from "./pages/Sell";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import "./style.scss";

const imageUrl = new URL("squirrel-logo.png", import.meta.url);

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

const AppHeader = () => {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="logo" src={imageUrl} />
        <h1>DrewU Marketplace</h1>
      </div>

      <ul>
        <li>Buy</li>
        <li>Sell</li>
        <li>Cart</li>
        <li>Logout</li>
      </ul>
    </header>
  );
};

render(<App />, document.getElementById("root"));
