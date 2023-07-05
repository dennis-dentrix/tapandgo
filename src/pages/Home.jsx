import { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
  ContentCopy,
  AcUnit,
} from "@mui/icons-material";
import {
  BoxArrowRight,
  Wallet,
  ArrowLeftRight,
  ArrowUpRightCircle,
  ArrowDownLeftCircle,
  Chat,
  QrCode,
  ArrowClockwise,
} from "react-bootstrap-icons";
import { Topup } from "./Topup";
import img from "../assets/app.svg";

import "./styles/home.scss";
import { iconStyle } from "./Discover";

export const Home = () => {
  const [showBal, setShowBal] = useState(true);
  const [copied, setCopied] = useState(true);
  const walletNumb = "Th9381452";

  const notify = () => {
    copied
      ? toast.success("Wallet number copied succesfully", {
          position: "bottom-right",
          className: "toast-message",
        })
      : toast.error("Error copiying. Try again!", {
          position: "bottom-right",
          className: "toast-message",
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
        <div className="home-intro">
          <div className="home-intro__initial">D</div>
          <div className="home-intro__greet">
            <p className="greeting">{time}</p>
            <p className="name">Denis Kyusya</p>
          </div>
        </div>

        <div className="home-landing">
          {/* Balance card */}
          <div className="home-landing__content">
            <div className="home-card ">
              <div className="home-card__view">
                <p className="home-card__text">
                  Balance
                  <span className="hide" onClick={handleBlur}>
                    {showBal ? (
                      <VisibilityOutlined style={iconStyle} />
                    ) : (
                      <VisibilityOffOutlined style={iconStyle} />
                    )}
                  </span>
                </p>

                <div className="home-card__amount">
                  <h3 className="home-card__bal">
                    KES
                    <span className={showBal ? "blur" : ""}> 305,788.00</span>
                  </h3>
                  <ArrowClockwise style={iconStyle} />
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
                      style={iconStyle}
                      className="home-card__icon"
                      onClick={notify}
                    />
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            {/* Download from playstore section */}
            <div className="home-app">
              <div className="home-app__text">
                <h2 className="home-app__heading">Get the app</h2>
                <p className="home-app__desc">
                  Get your wallet and start using it anytime anywhere
                </p>
              </div>
              <img
                src={img}
                alt=""
                className="home-app__img"
                width={100}
                height={100}
              />
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
              <Wallet sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Wallet Topup</span>
            </Link>

            <div className="actions-card actions-card__1">
              <QrCode sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Lipa Fare</span>
            </div>

            <div className="actions-card">
              <ArrowUpRightCircle
                sx={{ fontSize: 25 }}
                className="actions-icon"
              />{" "}
              <span className="actions-name">Send Fare</span>
            </div>

            <div className="actions-card">
              <ArrowDownLeftCircle
                sx={{ fontSize: 25 }}
                className="actions-icon"
              />{" "}
              <span className="actions-name">Receive Fare</span>
            </div>

            <div className="actions-card">
              <ArrowLeftRight sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Kopa Fare</span>
            </div>

            <Link to="forum" className="actions-card link">
              <Chat sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Forum</span>
            </Link>
          </div>
        </div>

        <div className="foot">
          <AcUnit sx={{ fontSize: 20 }} className="actions-icon" />
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
