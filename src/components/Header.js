import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

const Title = () => (
  <a href="/">
    <img className="w-28" alt="logo" src={Logo}></img>
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="header flex justify-between items-center border-black border-2 border-solid">
      <Title />
      <div className="nav-items">
        <ul className="flex justify-between">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Insta Mart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
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
  );
};

export default Header;
