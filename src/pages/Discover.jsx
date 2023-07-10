import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import payment from "../assets/payment.svg";
import {
  QrCode,
  Send,
  BoxSeam,
  Gift,
  BarChart,
  Receipt,
  Whatsapp,
  Envelope,
  Telephone,
  Lightbulb,
  QrCodeScan,
} from "react-bootstrap-icons";
import "./styles/discover.scss";
// import { actionsIcon } from "./Home";

export const Discover = () => {
  const [open, setOpen] = useState(false);
  const [support, setSupport] = useState(false);
  const navigate = useNavigate();
  const openReceipts = () => navigate("/receipts");

  function handleOpen() {
    return setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const handleOpenSupport = () => {
    setSupport(true);
  };
  const closeSupport = () => {
    setSupport(false);
  };

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
  const landingIcon = {
    fontSize: "1rem",
  };

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

            <Link className="actions-card link">
              <QrCode className="actions-icon" />{" "}
              <span className="actions-name">Pay Goods</span>
            </Link>

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
              <span onClick={handleOpenSupport} className="actions-name">
                Support
              </span>
              {/* Dialog box for support */}
              <Dialog
                open={support}
                onClose={closeSupport}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  id="alert-dialog-title"
                  sx={{ fontWeight: "bold" }}
                >
                  {"Reach out to us"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    sx={{ fontSize: 13 }}
                  >
                    Hello! Our team will work to get back to you within the next
                    24 hours.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    sx={{ color: "#2e3532" }}
                    className="support-reachout"
                    autoFocus
                  >
                    <Envelope />
                    <span>Email</span>
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{ color: "#2e3532" }}
                    className="support-reachout"
                    autoFocus
                  >
                    <Telephone />
                    <span>Phone</span>
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{ color: "#2e3532" }}
                    autoFocus
                    className="support-reachout"
                  >
                    <Whatsapp />
                    <span>WhatsApp</span>
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="foot">
          <Lightbulb className="actions-icon" />
          <div className="foot-content">
            <h2 className="foot-heading">Fare Points</h2>
            <p className="foot-desc">
              Enjoy a variety of discounts, verification badge and creator mode
              by having more fare points
            </p>
          </div>
        </div>

        <button className="discover-btn" style={{ borderRadius: "10rem" }}>
          {" "}
          <QrCode className="actions-icon" />{" "}
          <span className="actions-name">Lipa Fare</span>
        </button>
      </section>
    </main>
  );
};
