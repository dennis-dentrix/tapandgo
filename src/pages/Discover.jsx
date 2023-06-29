import React, { Fragment, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Receipt,
  QrCode,
  Send,
  TakeoutDining,
  Payments,
  Loyalty,
  MailOutline,
  PhoneCallback,
  WhatsApp,
} from "@mui/icons-material";
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
    // border: "2px solid #000",
    // boxShadow: 24,
    p: 4,
  };
  return (
    <main className="main">
      <section className="discover">
        <div className="actions">
          <p className="actions-discover">Discover</p>

          <div className="actions-container">
            <div onClick={openReceipts} className="actions-card link">
              <Receipt sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Receipts</span>
            </div>

            <div className="actions-card link" onClick={handleOpen}>
              <Loyalty sx={{ fontSize: 25 }} className="actions-icon" />{" "}
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
              <QrCode sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Pay Goods</span>
            </Link>

            <Link className="actions-card link">
              <Payments sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Pay Utilities</span>
            </Link>

            <Link className="actions-card link">
              <TakeoutDining sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span className="actions-name">Parcels</span>
            </Link>

            <div className="actions-card link">
              <Send sx={{ fontSize: 25 }} className="actions-icon" />{" "}
              <span onClick={handleOpenSupport} className="actions-name">
                Support
              </span>
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
                    <MailOutline />
                    <span>Email</span>
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{ color: "#2e3532" }}
                    className="support-reachout"
                    autoFocus
                  >
                    <PhoneCallback />
                    <span>Phone</span>
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{ color: "#2e3532" }}
                    autoFocus
                    className="support-reachout"
                  >
                    <WhatsApp />
                    <span>WhatsApp</span>
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="foot">
          <Loyalty sx={{ fontSize: 20 }} className="actions-icon" />
          <div className="foot-content">
            <h2 className="foot-heading">Fare Points</h2>
            <p className="foot-desc">
              Enjoy a variety of discounts, verification badge and creator mode
              by having more fare points
            </p>
          </div>
        </div>

        <button className="discover-btn">
          {" "}
          <QrCode sx={{ fontSize: 20 }} className="actions-icon" />{" "}
          <span className="actions-name">Lipa Fare</span>
        </button>
      </section>
    </main>
  );
};
