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
import { House, Gift, Gear } from "react-bootstrap-icons";

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
        <li className="nav-item ">
          <Link to="/" className="nav-link link">
            <House className="nav-link__icon" fontSize="2rem" />
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="discover" className="nav-link link">
            <Gift className="nav-link__icon" fontSize="2rem" />
            Discover
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link link">
            <Gear className="nav-link__icon" fontSize="2rem" />
            Settings
          </Link>
        </li>

        {/* button that opens lipa fare */}
        <Link className="nav-btn link">
          <QrCode className="nav-btn-icon" />
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
