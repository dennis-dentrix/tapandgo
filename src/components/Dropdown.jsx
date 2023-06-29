import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Person2Outlined,
  EmailOutlined,
  WalletOutlined,
  CreateOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

export const Dropdown = () => {
  const navigate = useNavigate();

  const handleReceipts = () => navigate("/receipts");

  return (
    <div className="nav-dropdown__content">
      <div className="user-info">
        <div className="user-info__detail">
          <Person2Outlined className="user-icon" sx={{ fontSize: 12 }} />{" "}
          <p className="user-name">Denis Kyusya</p>
        </div>

        <div className="user-info__detail">
          <EmailOutlined className="user-icon" sx={{ fontSize: 12 }} />
          <p className="user-info__email">denkyusya@gmail.com</p>{" "}
        </div>
      </div>

      {/* second part */}
      <div className="nav-dropdown__todos">
        <div className="nav-dropdown__do">
          <div onClick={handleReceipts} className="nav-dropdown__name link">
            <WalletOutlined sx={{ fontSize: 12, color: "#696047" }} />
            <p className="nav-dropdown__action nav-theme">Receipts</p>
          </div>
        </div>

        <div className="nav-dropdown__do">
          <div className="nav-dropdown__name">
            <CreateOutlined sx={{ fontSize: 12 }} />
            <Link to="account" className="nav-dropdown__action link">
              Edit account
            </Link>
          </div>
        </div>

        <div className="nav-dropdown__do">
          <div className="nav-dropdown__name">
            <LogoutOutlined sx={{ fontSize: 12 }} />
            <Link className="nav-dropdown__action link">Log out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
