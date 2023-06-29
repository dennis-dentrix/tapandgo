import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { CardForm } from "../components";
import { MpesaForm } from "../components";
import "./styles/topup.scss";

export const Topup = () => {
  const [active, setActive] = useState(true);

  const handleOptionMpesa = () => {
    setActive(true);
  };
  const handleOptionCard = () => {
    setActive(false);
  };
  return (
    <section className="topup">
      <div className="topup-content">
        <header className="topup-header">
          <div className="topup-header__top">
            <Link to="/" className="link topup-link">
              {/* <ArrowBack /> */}
              <h2 className="topup-heading">Topup</h2>
            </Link>
          </div>

          <div className="topup-option">
            <a className="topup-option__card " onClick={handleOptionMpesa}>
              <span className={active ? "topup-option__active" : ""}>
                Mpesa
              </span>
            </a>

            <a className="topup-option__card" onClick={handleOptionCard}>
              <span className={active ? "" : "topup-option__active"}>Card</span>
            </a>
          </div>
        </header>
        {active ? <MpesaForm /> : <CardForm />}
      </div>
    </section>
  );
};
