import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

import {
  Box,
  Typography,
  Modal,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import {
  QrCode,
  Send,
  BoxSeam,
  Gift,
  BarChart,
  Receipt,
  Whatsapp,
  Lightbulb,
  Mailbox,
  Phone,
} from "react-bootstrap-icons";
import "./styles/discover.scss";

export const Discover = () => {
  const [open, setOpen] = useState(false);
  const [support, setSupport] = useState(false);
  const [state, setState] = useState(false);
  const [lipaFare, setLipaFare] = useState(false);
  const navigate = useNavigate();
  const openReceipts = () => navigate("/receipts");

  function handleOpen() {
    return setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const handleOpenSupport = () => {
    setState(true);
  };
  const closeSupport = () => {
    setState(false);
  };

  function openLipaFare() {
    setLipaFare(true);
  }

  function closeLipaFare() {
    setLipaFare(false);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
    border: "none",
    borderRadius: 5,
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      setState(false);
    }

    setState(open);
  };

  function returnIcon(i) {
    if (i == 0) {
      return <Mailbox />;
    } else if (i == 1) {
      return <Phone />;
    } else {
      return <Whatsapp />;
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Mail", "Phone", "WhatsApp"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: "2rem", marginRight: "1rem" }}>
                {returnIcon(index)}
              </ListItemIcon>

              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                {text}
              </p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <main className="main">
      <section className="discover">
        <p className="discover-title">Discover</p>
        <div className="actions">
          <div className="actions-container">
            <div onClick={openReceipts} className="actions-card link">
              <Receipt className="actions-icon" />{" "}
              <span className="actions-name">Receipts</span>
            </div>

            <div className="actions-card link" onClick={handleOpen}>
              <Gift className="actions-icon" />{" "}
              <span className="actions-name">Fare Points</span>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="modal-box">
                <Typography>
                  Your Tap&go Rider points are 10. Ride more with Tap&go to earn
                  more points.
                </Typography>
              </Box>
            </Modal>

            <div>
              <div className="actions-card link" onClick={openLipaFare}>
                <QrCode className="actions-icon" />{" "}
                <span className="actions-name">Pay Goods</span>
              </div>
              <Drawer anchor={"bottom"} open={lipaFare} onClose={closeLipaFare}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                  }}
                >
                  <div>
                    <QRCode value="hey" />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10vh",
                      }}
                    >
                      <h1>Use this QR Code for Pay goods</h1>
                      <p
                        style={{
                          fontSize: "1.4rem",
                          textAlign: "center",
                          marginTop: ".4rem",
                        }}
                      >
                        A transaction will be carried out to your <br /> wallet
                        and an SMS alert will be sent upon <br /> successfull
                        payment.
                      </p>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>

            <Link className="actions-card link">
              <BarChart className="actions-icon" />{" "}
              <span className="actions-name">Pay Utilities</span>
            </Link>

            <Link className="actions-card link">
              <BoxSeam className="actions-icon" />{" "}
              <span className="actions-name">Parcels</span>
            </Link>

            <div className="actions-card link">
              <Send className="actions-icon" />{" "}
              <span
                onClick={(e) => handleOpenSupport(e)}
                className="actions-name"
              >
                Support
              </span>
            </div>
          </div>
        </div>
        <div className="foot">
          <Lightbulb style={{ fontSize: "4rem" }} className="actions-icon" />
          <div className="foot-content">
            <h2
              className="foot-heading"
              style={{ fontFamily: "Bold", fontSize: "1.4rem" }}
            >
              Fare Points
            </h2>
            <p className="foot-desc">
              Enjoy a variety of discounts, verification badge and creator mode
              by having more fare points
            </p>
          </div>
        </div>
        <button
          onClick={openLipaFare}
          className="discover-btn"
          style={{ borderRadius: "10rem" }}
        >
          <QrCode className="actions-icon" />
          <span className="actions-name">Lipa Fare</span>
        </button>

        <Drawer anchor={"bottom"} open={state} onClose={closeSupport}>
          {list("bottom")}
        </Drawer>

        <Drawer anchor={"bottom"} open={lipaFare} onClose={closeLipaFare}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <div>
              <QRCode value="hey" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10vh",
                }}
              >
                <h1>Use this QR Code for Lipa Fare</h1>
                <p
                  style={{
                    fontSize: "1.4rem",
                    textAlign: "center",
                    marginTop: ".4rem",
                  }}
                >
                  A transaction will be carried out to your <br /> wallet and an
                  SMS alert will be sent upon <br /> successfull payment.
                </p>
              </div>
            </div>
          </div>
        </Drawer>
      </section>
    </main>
  );
};
