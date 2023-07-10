import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowClockwise,
  InfoCircle,
  BoxArrowRight,
  Trash,
  PencilSquare,
  Pencil,
} from "react-bootstrap-icons";
import {
  Modal,
  Box,
  Button,
  Typography,
  DialogActions,
  Avatar,
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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    border: "1px solid #696s047",
    borderRadius: 3,

    p: 2,
  };

  const listStyle = {
    padding: "1rem 1rem",
  };

  const heading = {
    fontFamily: "Bold",
    fontSize: "1.4rem",
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
            style={{ padding: "2rem 1rem", borderRadius: ".8rem" }}
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

          <h3
            className="settings-name"
            style={{
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              fontFamily: "Bold",
            }}
          >
            Common
          </h3>
          <div className="settings-common">
            <ul className="settings-list">
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
                  <p className="settings-item__about">Give us your feedback</p>
                </span>
              </li>

              <li className="settings-item" style={listStyle}>
                <ArrowClockwise
                  className="actions-icon"
                  sx={{ fontSize: 18 }}
                  style={{ marginRight: "1rem" }}
                />
                <span className="settings-item__desc">
                  <h3 className="settings-item__name" style={heading}>
                    Check for Updates
                  </h3>
                  <p className="settings-item__about">
                    Update to our latest release
                  </p>
                </span>
              </li>
              <div>
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
                    <p className="settings-item__about">V 1.0</p>
                  </span>
                </li>

                <Modal
                  open={about}
                  onClose={handleCloseAbout}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle}>
                    <Typography
                      id="modal-modal-title"
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Tap&Go-KE
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, fontSize: "10px" }}
                    >
                      The latest version from our developers
                    </Typography>
                    <DialogActions>
                      <Button
                        onClick={handleCloseAbout}
                        style={{ color: "#e3762b" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleCloseAbout}
                        style={{ color: "#e3762b" }}
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </Box>
                </Modal>
              </div>
            </ul>
          </div>

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
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle}>
                    <Typography
                      id="modal-modal-title"
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Log out
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, fontSize: "10px" }}
                    >
                      Your account will be temporarily disabled. You can log
                      back in
                    </Typography>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        style={{ color: "#e3762b" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleClose}
                        style={{ color: "#e3762b" }}
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </Box>
                </Modal>
              </div>

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
                <Modal
                  open={del}
                  onClose={handleCloseDelete}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle}>
                    <Typography
                      id="modal-modal-title"
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      Delete account
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Are you sure you want to permenently delete your account?
                    </Typography>
                    <DialogActions>
                      <Button
                        onClick={handleCloseDelete}
                        style={{ color: "#e3762b" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleCloseDelete}
                        style={{ color: "#e3762b" }}
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </Box>
                </Modal>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
