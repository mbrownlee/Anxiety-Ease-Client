import React from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import "./Nav.css";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <nav>
      <ul>
        {isAuthenticated() ? (
          <li className="nav-item">
            <Link to="/activities">
              <button type="button">Activites</button>
            </Link>
          </li>
        ) : (
          ""
        )}

        {isAuthenticated() ? (
          <li className="nav-item">
            <Link to="/mystats">
              <button type="button">My Stats</button>
            </Link>
          </li>
        ) : (
          ""
        )}

        {isAuthenticated() ? (
          <li className="nav-item">
            <button
              className="nav-link fakeLink"
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/",
                });
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button type="button">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <button type="button">Register</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
