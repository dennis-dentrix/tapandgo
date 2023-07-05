import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircleFill,
  ChatLeftDots,
} from "react-bootstrap-icons";
import "./styles/forum.scss";

export const Forum = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate("/");
  const iconStyle = {
    color: "#e3762b",
  };
  return (
    <section className="main-forum">
      <div className="section-top">
        <ArrowLeft onClick={handleHome} />
        <h2 className="section-heading">Forum</h2>
      </div>

      <div className="message">
        <div className="message-card">
          <div className="message-icon">DK</div>
          <div className="message-card__message">
            <div className="message-user">
              <p className="message-card__user">Denis kyusya</p>
              <CheckCircleFill
                style={iconStyle}
                className="message-icon__icon"
              />
            </div>

            <div className="message-body">
              <div className="message-box">
                <input type="checkbox" id="expanded" />
                <p className="message-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, accusantium fuga ducimus autem laboriosam atque,
                  perferendis voluptatibus voluptas in eos modi aut minima nam
                  dignissimos libero facilis quia. Adipisci, labore.
                </p>
                <label htmlFor="expanded" role="button" className="readmore">
                  read more
                </label>
              </div>
              <div className="message-body__img">Img</div>
            </div>

            {/* Open all comments */}
            <Link to="/forum/comments" className="link message-link">
              <ChatLeftDots />
              Comments
            </Link>
          </div>
        </div>

        <div className="message-card">
          <div className="message-icon">DK</div>
          <div className="message-card__message">
            <div className="message-user">
              <p className="message-card__user">Denis kyusya</p>
              <CheckCircleFill
                style={iconStyle}
                className="message-icon__icon"
              />
            </div>

            <div className="message-body">
              <div className="message-box">
                <input type="checkbox" id="expanded" />
                <p className="message-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, accusantium fuga ducimus autem laboriosam atque,
                  perferendis voluptatibus voluptas in eos modi aut minima nam
                  dignissimos libero facilis quia. Adipisci, labore.
                </p>
                <label htmlFor="expanded" role="button" className="readmore">
                  read more
                </label>
              </div>
              <div className="message-body__img">Img</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
