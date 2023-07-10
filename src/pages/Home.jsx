import { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContentCopy, AcUnit } from "@mui/icons-material";
import { Avatar } from "@mui/material";

import {
  BoxArrowRight,
  Wallet,
  ArrowLeftRight,
  ArrowUpRightCircle,
  ArrowDownLeftCircle,
  Chat,
  QrCode,
  ArrowClockwise,
  Eye,
  EyeSlash,
  Lightbulb,
} from "react-bootstrap-icons";
import { Topup } from "./Topup";
import img from "../assets/app.svg";

import "./styles/home.scss";

export const Home = () => {
  const [showBal, setShowBal] = useState(true);
  const [copied, setCopied] = useState(true);
  const walletNumb = "TG|TGDJ54868DB";

  const notify = () => {
    copied
      ? toast.success("Wallet number copied succesfully", {
          position: "bottom-right",
        })
      : toast.error("Error copiying. Try again!", {
          position: "bottom-right",
          // className: "toast-message",
        });
    setCopied(false);
  };
  const handleBlur = () => {
    return setShowBal((show) => !show);
  };

  const time = () => {
    let today = new Date();
    let hrs = today.getHours();
    let greeting;
    if (hrs >= 0 && hrs < 12) {
      greeting = "Good morning";
    } else if (hrs >= 12 && hrs < 6) {
      greeting = "Good afternoon";
    } else if (hrs >= 6 && hrs < 0) {
      greeting = "Good Evening";
    }
    return greeting;
  };

  return (
    <main className="main">
      <section className="home">
        <div className="home-intro" style={{ marginTop: "3rem" }}>
          <Avatar sx={{ bgcolor: "orange" }}>DK</Avatar>
          <div className="home-intro__greet">
            {/* Not working */}
            <p style={{ fontSize: "1.3rem" }}>{time()}</p>
            <p className="name">Denis Kyusya</p>
          </div>
        </div>

        <div className="home-landing">
          <div className="home-landing__content">
            <div className="home-card ">
              <div className="home-card__view">
                <p className="home-card__text">
                  Balance
                  <span className="hide" onClick={handleBlur}>
                    {showBal ? (
                      <Eye fontSize="1.7rem" classname="actions-icon" />
                    ) : (
                      <EyeSlash fontSize="1.7rem" classname="actions-icon" />
                    )}
                  </span>
                </p>

                <div className="home-card__amount">
                  <h3 className="home-card__bal">
                    KES
                    <span className={showBal ? "blur" : ""}> 305,788.00</span>
                  </h3>

                  <ArrowClockwise fontSize="2rem" classname="actions-icon" />
                </div>
              </div>

              <div></div>
              <div className="home-card__wallet">
                <p className="home-card__text">Wallet number</p>
                <div className="home-card__value">
                  <h3 className="home-card__numb">{walletNumb}</h3>

                  <CopyToClipboard
                    text={walletNumb}
                    onCopy={() => setCopied(true)}
                  >
                    <ContentCopy
                      classname="actions-icon"
                      className="home-card__icon"
                      onClick={notify}
                    />
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>

          {/* Top up form */}
          <div className="home-form">
            <Topup />
          </div>
        </div>

        {/* Quick actions */}
        <div className="actions">
          <h1 className="actions-title">Quick actions</h1>

          <div className="actions-container">
            <Link to="topup" className="actions-card link">
              <Wallet className="actions-icon" />{" "}
              <span className="actions-name">Wallet Topup</span>
            </Link>

            <div className="actions-card actions-card__1">
              <QrCode className="actions-icon" />{" "}
              <span className="actions-name">Lipa Fare</span>
            </div>

            <div className="actions-card">
              <ArrowUpRightCircle className="actions-icon" />{" "}
              <span className="actions-name">Send Fare</span>
            </div>

            <div className="actions-card">
              <ArrowDownLeftCircle className="actions-icon" />{" "}
              <span className="actions-name">Receive Fare</span>
            </div>

            <div className="actions-card">
              <ArrowLeftRight className="actions-icon" />{" "}
              <span className="actions-name">Kopa Fare</span>
            </div>

            <Link to="forum" className="actions-card link">
              <Chat className="actions-icon" />{" "}
              <span className="actions-name">Forum</span>
            </Link>
          </div>
        </div>

        <div className="foot">
          <Lightbulb
            style={{ marginRight: "1.5rem", fontSize: "4rem", color: "orange" }}
          />
          <div className="foot-content">
            <h2 className="foot-heading">Simple Smart Life</h2>
            <p className="foot-desc">
              Acess limitless capabilities of cashless matatu payment anytime,
              anywhere with anyone
            </p>
          </div>
        </div>
        <ToastContainer />

        <br />
      </section>
    </main>
  );
};
