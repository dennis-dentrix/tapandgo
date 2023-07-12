import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Modal,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
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
  const [drawer, setDrawer] = useState(false);

  const navigate = useNavigate();
  const openReceipts = () => navigate("/receipts");

  function handleOpen() {
    return setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  const list = () => (
    <Box
      sx={{ width: "auto", height: 100, borderRadius: 10 }}
      role="presentation"
    >
      <List className="list">
        <ListItem className="list-item">
          <div className="list-text">
            <ListItemIcon>
              <Telephone style={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontSize: "1.4rem" }}>Call</span>
            </ListItemText>
          </div>
        </ListItem>

        <ListItem className="list-item">
          <div className="list-text">
            <ListItemIcon>
              <Whatsapp style={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontSize: "1.4rem" }}>Whatsapp</span>
            </ListItemText>
          </div>
        </ListItem>

        <ListItem className="list-item">
          <div className="list-text">
            <ListItemIcon>
              <Envelope style={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontSize: "1.4rem" }}>Email</span>
            </ListItemText>
          </div>
        </ListItem>
      </List>
    </Box>
  );

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

            <>
              <div className="actions-card link">
                <Send className="actions-icon" />{" "}
                <span className="actions-name" onClick={openDrawer}>
                  Support
                </span>
              </div>

              {/* Dialog box for support */}
              <Drawer anchor="bottom" open={drawer} onClose={closeDrawer}>
                {list("bottom")}
              </Drawer>
            </>
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

        <button className="discover-btn" style={{ borderRadius: "10rem" }}>
          {" "}
          <QrCode className="actions-icon" />{" "}
          <span className="actions-name">Lipa Fare</span>
        </button>
      </section>
    </main>
  );
};
