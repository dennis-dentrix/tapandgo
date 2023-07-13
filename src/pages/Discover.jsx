import { useState } from "react";
import QRCode from "react-qr-code";

import {
  Avatar,
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
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
import { CloseOutlined } from "@mui/icons-material";
import "./styles/discover.scss";

export const Discover = () => {
  const [receipt, setReceipt] = useState(false);
  const [state, setState] = useState(false);
  const [lipaFare, setLipaFare] = useState(false);
  const [farePoints, setFarepoints] = useState(false);
  const [newFeature, setNewfeature] = useState(false);

  // const navigate = useNavigate();
  // const openReceipts = () => navigate("/receipts");

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

  const openFarepoints = () => setFarepoints(true);
  const closeFarepoints = () => setFarepoints(false);
  const openFeature = () => setNewfeature(true);
  const closeFeature = () => setNewfeature(false);

  // Receipt
  const openReceipt = () => setReceipt(true);
  const closeReceipt = () => setReceipt(false);
  let date = new Date().toDateString();
  const ReceiptView = () => (
    <Box
      sx={{
        height: 500,
        width: 400,
        padding: "2rem",
      }}
      role="presentation"
    >
      <div>
        <h1
          style={{
            fontFamily: "Bold",
            fontSize: "1.6rem",
            display: "flex",
            gap: "1.3rem",
            alignItems: "center",
          }}
        >
          <CloseOutlined sx={{ fontSize: "2rem" }} onClick={closeReceipt} />
          Receipts{" "}
        </h1>
        <List style={{ width: "100%" }}>
          <ListItem style={{ padding: "0px", width: "100%" }}>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: "#e3762b" }}>DK</Avatar>
            </ListItemIcon>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflowX: "hidden",
              }}
            >
              <div>
                <h2 className="id">TG#739619</h2>
                <p className="date">{date}</p>
              </div>

              <div>
                <h2>KES. 100.00</h2>
                <p>COMPLETED</p>
              </div>
            </div>
          </ListItem>
        </List>
      </div>
    </Box>
  );

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
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Mail", "Phone", "WhatsApp"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: "2.5rem", margin: "0.2rem" }}>
                {returnIcon(index)}
              </ListItemIcon>

              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textAlign: "center",
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
            {/* Receipts */}
            <>
              <div onClick={openReceipt} className="actions-card link">
                <Receipt className="actions-icon" />{" "}
                <span className="actions-name">Receipts</span>
              </div>
              <SwipeableDrawer
                anchor="bottom"
                open={receipt}
                onClose={closeReceipt}
              >
                {ReceiptView("bottom")}
              </SwipeableDrawer>
            </>

            {/* Fare points */}
            <>
              <div className="actions-card link" onClick={openFarepoints}>
                <Gift className="actions-icon" />{" "}
                <span className="actions-name">Fare Points</span>
              </div>

              <Dialog
                open={farePoints}
                onClose={closeFarepoints}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle style={{ fontSize: 18 }}>
                  {"Fare points"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-slide-description"
                    style={{ fontSize: 14 }}
                  >
                    Your Tap&go Rider points are 10. Ride more with Tap&go to
                    earn more points.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={closeFarepoints}
                    style={{ fontSize: 14, color: "#e3762b" }}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </>

            {/* Pay Goods */}
            <>
              <div className="actions-card link" onClick={openLipaFare}>
                <QrCode className="actions-icon" />{" "}
                <span className="actions-name">Pay Goods</span>
              </div>
              <SwipeableDrawer
                anchor={"bottom"}
                open={lipaFare}
                onClose={closeLipaFare}
              >
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
              </SwipeableDrawer>
            </>

            {/* Pay Utilities */}
            <>
              <div className="actions-card link" onClick={openFeature}>
                <BarChart className="actions-icon" />{" "}
                <span className="actions-name">Pay Utilities</span>
              </div>
              <Dialog
                open={newFeature}
                onClose={closeFeature}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
                  {"Coming soon"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-slide-description"
                    style={{ fontSize: 14, fontFamily: "Regular" }}
                  >
                    We are currently developing this feature for you. You will
                    be notified when the feature is available for use.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={closeFeature}
                    style={{
                      fontSize: 14,
                      color: "#e3762b",
                      fontFamily: "Regular",
                    }}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </>

            {/* Parcels */}
            <>
              <div className="actions-card link" onClick={openFeature}>
                <BoxSeam className="actions-icon" />{" "}
                <span className="actions-name">Parcels</span>
              </div>
              <Dialog
                open={newFeature}
                onClose={closeFeature}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
                  {"Coming soon"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-slide-description"
                    style={{ fontSize: 14, fontFamily: "Regular" }}
                  >
                    We are currently developing this feature for you. You will
                    be notified when the feature is available for use.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={closeFeature}
                    style={{
                      fontSize: 14,
                      color: "#e3762b",
                      fontFamily: "Regular",
                    }}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </>

            {/* Support */}
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

        {/* Footnote  */}
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

        {/* Lipa Fare QrCode */}
        <>
          <button
            onClick={openLipaFare}
            className="discover-btn"
            style={{ borderRadius: "10rem" }}
          >
            <QrCode className="actions-icon" />
            <span className="actions-name">Lipa Fare</span>
          </button>

          <SwipeableDrawer
            anchor={"bottom"}
            open={state}
            onClose={closeSupport}
          >
            {list("bottom")}
          </SwipeableDrawer>
        </>

        {/* <SwipeableDrawer
          anchor={"bottom"}
          open={lipaFare}
          onClose={closeLipaFare}
        >
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
        </SwipeableDrawer> */}
      </section>
    </main>
  );
};
