import { useState } from "react";
import { useNavigate } from "react-router-dom";

// React bootstrap icons
import {
  InfoCircle,
  BoxArrowRight,
  Trash,
  PencilSquare,
  Pencil,
} from "react-bootstrap-icons";

// Material ui components
import {
  Button,
  DialogActions,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import "./styles/settings.scss";

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [del, setDelete] = useState(false);

  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  const listStyle = {
    padding: "1rem 1rem",
  };

  const heading = {
    fontWeight: "800",
    fontSize: "1.2rem",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenAbout = () => setAbout(true);
  const handleCloseAbout = () => setAbout(false);
  const handleOpenDelete = () => setDelete(true);
  const handleCloseDelete = () => setDelete(false);

  return (
    <main className="main">
      <section className="settings">
        <p className="settings-title">Settings</p>

        <div className="settings-settings">
          <div
            className="settings-user"
            style={{ padding: "2rem 1rem", borderRadius: "1rem" }}
          >
            <Avatar sx={{ bgcolor: "orange" }} style={{ marginRight: "1rem" }}>
              DK
            </Avatar>
            <div className="settings-user__person">
              <p className="name" style={{ marginBottom: ".2rem" }}>
                Denis Kyusya
              </p>
              <p className="settings-user__email">denkyusya@gmail.com</p>
            </div>
          </div>

          {/* Common Setting */}
          <>
            <h3
              className="settings-name"
              style={{
                fontSize: "1.3rem",
                marginBottom: "1.3rem",
                fontFamily: "Bold",
              }}
            >
              Common
            </h3>
            <div className="settings-common">
              <ul className="settings-list">
                {/* Rate & Review */}
                <li className="settings-item" style={listStyle}>
                  <PencilSquare
                    className="actions-icon"
                    sx={{ fontSize: 18 }}
                    style={{ marginRight: "1rem" }}
                  />
                  <span className="settings-item__desc">
                    <h3 className="settings-item__name" style={heading}>
                      Rate & Review us
                    </h3>
                    <p className="settings-item__about">
                      Give us your feedback
                    </p>
                  </span>
                </li>

                {/* About setting */}
                <>
                  <li
                    className="settings-item"
                    onClick={handleOpenAbout}
                    style={listStyle}
                  >
                    <InfoCircle
                      className="actions-icon"
                      sx={{ fontSize: 18 }}
                      style={{ marginRight: "1rem" }}
                    />
                    <span className="settings-item__desc">
                      <h3 className="settings-item__name" style={heading}>
                        About
                      </h3>
                      <p className="settings-item__about">v 2.3.8 Eel</p>
                    </span>
                  </li>

                  <Dialog
                    open={about}
                    onClose={handleCloseAbout}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle style={{ fontSize: 15, fontFamily: "Bold" }}>
                      {"Tap&Go - KE v 2.3.8 Eel"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{ fontSize: 14, fontFamily: "Regular" }}
                      >
                        Thanks to our Designers, Developers and you, our
                        Customer who helped in developing this product.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseAbout}
                        style={{
                          fontSize: 14,
                          fontFamily: "Light",
                          color: "#e3762b",
                        }}
                      >
                        Got it
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              </ul>
            </div>
          </>

          {/* Account settings */}
          <>
            <h3
              className="settings-name"
              style={{
                fontSize: "1.4rem",
                marginBottom: "1.3rem",
                fontFamily: "Bold",
              }}
            >
              Account
            </h3>

            <div className="settings-account">
              <ul className="settings-list">
                {/* Edit Account */}
                <>
                  <div
                    onClick={handleEdit}
                    className="settings-item link"
                    style={listStyle}
                  >
                    <Pencil
                      className="actions-icon"
                      sx={{ fontSize: 18 }}
                      style={{ marginRight: "1rem" }}
                    />
                    <span className="settings-item__desc">
                      <h3 className="settings-item__name" style={heading}>
                        Edit account
                      </h3>
                      <p className="settings-item__about">
                        Edit your account details
                      </p>
                    </span>
                  </div>
                </>

                {/* Log out */}
                <div>
                  <div
                    className="settings-item"
                    onClick={handleOpen}
                    style={listStyle}
                  >
                    <BoxArrowRight
                      className="actions-icon"
                      sx={{ fontSize: 18 }}
                      style={{ marginRight: "1rem" }}
                    />
                    <span className="settings-item__desc">
                      <h3 className="settings-item__name" style={heading}>
                        Log Out
                      </h3>
                      <p className="settings-item__about">
                        Log out from your account
                      </p>
                    </span>
                  </div>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
                      {"Log out"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{ fontSize: 14, fontFamily: "Regular" }}
                      >
                        Your account will be temporarily disabled. You can log
                        back in
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        style={{
                          fontSize: 14,
                          fontFamily: "Regular",
                          color: "#e3762b",
                        }}
                      >
                        Logout
                      </Button>
                      <Button
                        onClick={handleClose}
                        style={{
                          fontSize: 14,
                          fontFamily: "Regular",
                          color: "#e3762b",
                        }}
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>

                {/* Delete Account */}
                <div>
                  <div
                    className="settings-item"
                    onClick={handleOpenDelete}
                    style={listStyle}
                  >
                    <Trash
                      className="actions-icon"
                      sx={{ fontSize: 18 }}
                      style={{ marginRight: "1rem" }}
                    />
                    <span className="settings-item__desc">
                      <h3 className="settings-item__name" style={heading}>
                        Delete account
                      </h3>
                      <p className="settings-item__about">
                        Your account will be permenetly deleted
                      </p>
                    </span>
                  </div>

                  <Dialog
                    open={del}
                    onClose={handleCloseDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
                      {"Delete Account"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{ fontSize: 14, fontFamily: "Regular" }}
                      >
                        Are you sure you want to permenently delete your
                        account?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseDelete}
                        style={{
                          fontSize: 14,
                          fontFamily: "Regular",
                          color: "#e3762b",
                        }}
                      >
                        Delete
                      </Button>

                      <Button
                        onClick={handleCloseDelete}
                        style={{
                          fontSize: 14,
                          fontFamily: "Regular",
                          color: "#e3762b",
                        }}
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </ul>
            </div>
          </>
        </div>
      </section>
    </main>
  );
};
