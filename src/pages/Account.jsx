import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowBackOutlined,
  ToggleOffOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";
import { ChevronLeft } from "react-bootstrap-icons";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Divider,
} from "@mui/material";
import "./styles/account.scss";

export const Account = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSetting = () => navigate("/settings");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="main">
      <section className="account">
        <div className="receipt-top">
          <ChevronLeft style={{ fontSize: "1.8rem" }} onClick={handleSetting} />

          <h1
            className="receipt-heading"
            style={{ fontSize: "1.5rem", fontFamily: "Regular" }}
          >
            Account
          </h1>
        </div>

        <div className="account-body">
          <div className="account-edit">
            <span onClick={handleClickOpen} style={{ fontSize: "1.4rem" }}>
              Edit
            </span>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle style={{ fontSize: "1.4rem" }}>
                Edit your account details
              </DialogTitle>

              <DialogContent>
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  multiline
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="e.g Joe Doe"
                  size="normal"
                  fullWidth
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  multiline
                  id="name"
                  type="text"
                  size="normal"
                  fullWidth
                  label="Phone Number"
                  placeholder="e.g 0712345678"
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  style={{ color: "#e3762b", fontSize: "1.4rem" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleClose}
                  style={{ color: "#e3762b", fontSize: "1.4rem" }}
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className="account-info">
            <div className="account-detail">
              <div className="account-detail__name ">
                <h2 className="account-name">Name</h2>
                <p className="account-name__user">Denis Kyusya</p>
              </div>
              <Divider />
              <div className="account-detail__name">
                <h2 className="account-name">Phone number</h2>
                <p className="account-name__user">0128789</p>
              </div>
            </div>
            <p className="account-detail__info" style={{ marginTop: "1rem" }}>
              The phone number can be used to contact you and more. Please note
              that the number can also be used for account top up
            </p>
          </div>

          <div className="account-info">
            <h3 className="account-detail__title">Contactible at</h3>
            <div className="account-detail">
              <div className="account-detail__name">
                <h2 className="account-name">Email</h2>
                <p className="account-name__user">denkyusya@gmail.com</p>
              </div>

              <Divider />
              <div className="account-detail__name">
                <h2 className="account-name">Account</h2>
                <p className="account-name__user">
                  Commuter
                  <span>
                    <CheckCircleOutline
                      style={{ fontSize: "2rem" }}
                      className="account-name__icon"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="account-info">
            <h3 className="account-detail__title">Mode</h3>
            <div className="account-detail">
              <div className="account-detail__name">
                <h2 className="account-name">Creator mode</h2>
                <p className="account-name__user">
                  <ToggleOffOutlined />
                </p>
              </div>
              <p className="account-mode">
                The phone number can be used to contact you and more. Please
                note that the number can also be used for account top up
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
