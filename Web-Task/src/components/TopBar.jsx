import React from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar py-2 border-bottom">
      <div className="container d-flex justify-content-end align-items-center gap-4">

        <a href="#" className="top-link">Events</a>
        <a href="#" className="top-link">Contact us</a>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
            type="button"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="flag"
              className="flag-icon"
            />
            ENG
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  className="flag-icon me-2"
                />
                English
              </a>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  className="flag-icon me-2"
                />
                Hindi
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TopBar;