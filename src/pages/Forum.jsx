import React from "react";
import { CheckBox, ArrowBackOutlined } from "@mui/icons-material";
import "./styles/forum.scss";

export const Forum = () => {
  return (
    <main className="main">
      <section className="main-forum">
        <div className="main-forum__top">
          <ArrowBackOutlined />
          <h2 className="main-forum__heading">Forum</h2>
        </div>

        <div className="message">
          <div className="message-card">
            <div className="message-icon">DK</div>
            <div className="message-card__message">
              <div className="message-user">
                <p className="message-card__user">Denis kyusya</p>
                <CheckBox className="message-icon__icon" />
              </div>

              <div className="message-body">
                <div className="message-body__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, accusantium fuga ducimus autem laboriosam atque,
                  perferendis voluptatibus voluptas in eos modi aut minima nam
                  dignissimos libero facilis quia. Adipisci, labore.
                </div>
                <div className="message-body__img">Img</div>
              </div>
            </div>
          </div>

          <div className="message-card">
            <div className="message-icon">DK</div>
            <div className="message-card__message">
              <div className="message-user">
                <p className="message-card__user">Denis kyusya</p>
                <CheckBox className="message-icon__icon" />
              </div>

              <div className="message-body">
                <div className="message-body__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, accusantium fuga ducimus autem laboriosam atque,
                  perferendis voluptatibus voluptas in eos modi aut minima nam
                  dignissimos libero facilis quia. Adipisci, labore.
                </div>
                <div className="message-body__img">Img</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
