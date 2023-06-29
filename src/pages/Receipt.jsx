import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";
import "./styles/receipt.scss";

export const Receipt = () => {
  const navigate = useNavigate();
  const handleDiscover = () => {
    navigate("/discover");
  };

  return (
    <main className="main">
      <section className="receipt">
        <div className="receipt-top">
          <ArrowBackOutlined onClick={handleDiscover} />

          <h1 className="receipt-heading">Receipts</h1>
        </div>

        <div className="receipt-body">
          <div className="receipt-detail">
            <div className="receipt-logo">DK</div>
            <div className="receipt-detail__about">
              <p className="receipt-number">TG#454878</p>
              <p className="receipt-status">Pending</p>
            </div>
          </div>

          <div className="receipt-detail__amount">
            <p className="receipt-paid">KSH 2500</p>
            <p className="receipt-date">12:19:05</p>
          </div>
        </div>
      </section>
    </main>
  );
};
