import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-28" alt="logo" src={Logo}></img>
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-orange-200 shadow-lg sm:bg-blue-50 mb-12">
      <Title />
      <div className="nav-items">
        <ul className="flex justify-between">
          <li className="px-2 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 hover:font-bold hover:text-red-500">
            <Link to="/instamart">Insta Mart</Link>
          </li>
          <li className="px-2 hover:font-bold">
            <Link to="/cart" data-testid="cart">
              Cart - {cartItems.length ? `${cartItems.length} items` : "Empty"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <span className="mr-5 font-bold text-red-400">{user.name}</span>
        {auth ? (
          <button className="mr-8" onClick={() => setAuth(false)}>
            Logout
          </button>
        ) : (
          <button className="mr-8" onClick={() => setAuth(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
