import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowBackOutlined,
  ToggleOffOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
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
          <ArrowBackOutlined onClick={handleSetting} />

          <h1 className="receipt-heading">Account</h1>
        </div>

        <div className="account-body">
          <div className="account-edit">
            <span onClick={handleClickOpen}>Edit</span>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit your account details</DialogTitle>

              <DialogContent>
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="e.g Joe Doe"
                  size="medium"
                  fullWidth
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{
                    style: { fontSize: 15, color: "GrayText" },
                  }}
                />
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  id="name"
                  type="text"
                  size="medium"
                  fullWidth
                  label="Phone Number"
                  placeholder="e.g 0712345678"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{
                    style: { fontSize: 15, color: "GrayText" },
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} style={{ color: "#e3762b" }}>
                  Cancel
                </Button>
                <Button onClick={handleClose} style={{ color: "#e3762b" }}>
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className="account-info">
            <div className="account-detail">
              <div className="account-detail__name">
                <h2 className="account-name">Name</h2>
                <p className="account-name__user">Denis Kyusya</p>
              </div>
              <hr color="tan" />
              <div className="account-detail__name">
                <h2 className="account-name">Phone number</h2>
                <p className="account-name__user">0128789</p>
              </div>
            </div>
            <p className="account-detail__info">
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
              <hr color="tan" />
              <div className="account-detail__name">
                <h2 className="account-name">Account</h2>
                <p className="account-name__user">
                  Commuter
                  <span>
                    <CheckCircleOutline className="account-name__icon" />
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
