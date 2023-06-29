import React from "react";
import { CreditCard, CreditScore } from "@mui/icons-material";

import "./styles/cardform.scss";

export const CardForm = () => {
  return (
    <div className="content">
      <p className="content-info">
        {/* <InfoOutlined /> */}
        Enter Phone number and amount to topup fare
      </p>

      <div className="form-container">
        <form className="card-form">
          <div className="card-detail">
            <div className="card-number">
              <input
                type="text"
                className="card-form__input"
                placeholder="Card number"
              />
              <CreditCard className="card-number__icon" />
            </div>

            <input
              type="text"
              placeholder="Card holder name"
              className="card-form__input"
            />
            <div className="card-form__details">
              <input
                type="text"
                placeholder="MM/YY"
                className="card-form__input"
              />
              <div className="card-form__cvc">
                <input
                  type="text"
                  placeholder="CVC"
                  className="card-form__input card-cvc"
                />
                <CreditScore className="card-cvc__icon" />
              </div>
            </div>
          </div>
          <button className="form-submit">Top up</button>
        </form>
      </div>
    </div>
  );
};
