import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../Store/auth-slice";
import "../../styles/Header.css";
function Header({ home }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className="nav">
      <div className="logo nav__item">
        <Link to="/">Crypto Dashboard</Link>
      </div>
      <ul className="nav__list">
        {home && (
          <li className="nav__item">
            <Link to="/home">Home</Link>
          </li>
        )}
        {!home && (
          <li className="nav__item">
            <Link to="/history">History</Link>
          </li>
        )}
        <li className="nav__item">
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
