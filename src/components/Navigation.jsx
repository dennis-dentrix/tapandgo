import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  CardGiftcard,
  Settings,
  VisibilityOutlined,
  VisibilityOffOutlined,
  QrCode,
} from "@mui/icons-material";
import { Dropdown } from "./Dropdown";

import "./styles/navigation.scss";

export const Navigation = () => {
  const [showBal, setShowBal] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleBlur = () => {
    return setShowBal((show) => !show);
  };

  const handleDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="nav">
      {/* logo goes here and is hidden in mobile */}
      <Link to="/" className="logo link">
        TnG
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link link">
            <span className="nav-link__icon">
              <Home />
            </span>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="discover" className="nav-link link">
            <span className="nav-link__icon">
              <CardGiftcard />
            </span>
            Discover
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link link">
            <span className="nav-link__icon">
              <Settings />
            </span>
            Settings
          </Link>
        </li>

        {/* button that opens lipa fare */}
        <Link className="nav-btn link">
          <QrCode className="nav-btn-icon" sx={{ fontSize: 13 }} />
          Lipa Fare
        </Link>
      </ul>

      <div className="nav-actions">
        {/*  balance */}
        <div className="user-amount"></div>

        {/* Name initial that opems dropdown with name & email, wallet number, Theme, edit accout btn, and logout btn */}
        <div className="nav-dropdown">
          <button className="nav-dropdown__btn" onClick={handleDropDown}>
            D
          </button>

          {dropdown ? <Dropdown /> : ""}
        </div>
      </div>
    </nav>
  );
};
