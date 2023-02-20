import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo}></img>
  </a>
);

const Header = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Insta Mart</Link>
          </li>

          <li>Cart</li>
        </ul>
      </div>
      {auth ? (
        <button onClick={() => setAuth(false)}>Logout</button>
      ) : (
        <button onClick={() => setAuth(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
