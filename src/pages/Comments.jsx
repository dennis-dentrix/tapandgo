import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "react-bootstrap-icons";
import "./styles/comments.scss";

export const Comments = () => {
  const navigate = useNavigate();
  const handleReturn = () => navigate("/forum");
  return (
    <section className="comment">
      <div className="section-top">
        <ArrowLeft onClick={handleReturn} />
        <h2 className="section-heading">Comments</h2>
      </div>

      <div className="comment-body">
        <div className="comment-body__messages">
          <div className="comment-content__received">
            <div className="message-icon">TG</div>
            <p className="comment-received comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="comment-content__sent">
            <p className="comment-sent comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="message-icon">Dk</div>
          </div>

          <div className="comment-content__received">
            <div className="message-icon">TG</div>
            <p className="comment-received comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="comment-content__sent">
            <p className="comment-sent comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="message-icon">Dk</div>
          </div>

          <div className="comment-content__received">
            <div className="message-icon">TG</div>
            <p className="comment-received comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="comment-content__sent">
            <p className="comment-sent comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="message-icon">Dk</div>
          </div>

          <div className="comment-content__received">
            <div className="message-icon">TG</div>
            <p className="comment-received comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="comment-content__sent">
            <p className="comment-sent comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="message-icon">Dk</div>
          </div>
          <div className="comment-content__received">
            <div className="message-icon">TG</div>
            <p className="comment-received comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="comment-content__sent">
            <p className="comment-sent comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="message-icon">Dk</div>
          </div>
        </div>
        {/* <form className="comment-space">
          <input
            type="text"
            placeholder="Write a comment"
            className="comment-input"
          />
          <Send />
        </form> */}
      </div>
    </section>
  );
};
