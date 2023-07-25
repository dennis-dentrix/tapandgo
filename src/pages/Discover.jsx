import { useState } from "react";

import {
  Avatar,
  Box,
  SwipeableDrawer,
  Drawer,
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
  BoxSeam,
  Gift,
  BarChart,
  Receipt,
  Whatsapp,
  Lightbulb,
  Mailbox,
  Telephone,
} from "react-bootstrap-icons";
import { CloseOutlined, InfoOutlined } from "@mui/icons-material";
import "./styles/discover.scss";
import { DrawerView, ComingSoon } from "../components";

export const Discover = () => {
  const [receipt, setReceipt] = useState(false);
  const [support, setSupport] = useState(false);
  const [lipaFare, setLipaFare] = useState(false);
  const [farePoints, setFarepoints] = useState(false);
  const [newFeature, setNewfeature] = useState(false);

  // const navigate = useNavigate();
  // const openReceipts = () => navigate("/receipts");

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
  const openSupport = () => setSupport(true);
  const closeSupport = () => setSupport(false);

  // Receipt
  const openReceipt = () => setReceipt(true);
  const closeReceipt = () => setReceipt(false);
  let date = new Date().toDateString();

  const ReceiptView = () => (
    <Box
      sx={{
        height: 600,
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
          <CloseOutlined
            sx={{ fontSize: "2.2rem", color: "#2e3532" }}
            onClick={closeReceipt}
          />
          Receipts{" "}
        </h1>

        <List style={{ width: "100%" }}>
          <ListItem style={{ padding: "0px", width: "100%" }}>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: "#e3762b", fontFamily: "Regular" }}>
                DK
              </Avatar>
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
                <h2 className="id" style={{ fontFamily: "Regular" }}>
                  TG#739619
                </h2>
                <p
                  className="date"
                  style={{ fontFamily: "Light", fontSize: 13 }}
                >
                  {date}
                </p>
              </div>

              <div>
                <h2 style={{ fontFamily: "Regular" }}>KES. 100.00</h2>
                <p style={{ fontFamily: "Light", fontSize: 13 }}>COMPLETED</p>
              </div>
            </div>
          </ListItem>
        </List>
      </div>
    </Box>
  );

  // const DrawerView = () => (
  //   <Box
  //     sx={{ width: 300, height: 475, borderRadius: 20, margin: "0 auto" }}
  //     role="presentation"
  //   >
  //     <div>
  //       <QRCode
  //         style={{
  //           height: "auto",
  //           maxWidth: "100%",
  //           width: "100%",
  //           padding: 20,
  //           marginBottom: 30,
  //         }}
  //         value="Hello"
  //         viewBox={`0 0 256 256`}
  //       />
  //       <h1 style={{ fontFamily: "Bold" }}>Use this QR Code for Lipa fare </h1>
  //       <p style={{ fontFamily: "Regular", fontSize: 13 }}>
  //         A transaction will be carried out to your wallet and an SMS alert will
  //         be sent to you upon successful payment
  //       </p>
  //     </div>
  //   </Box>
  // );

  // const List = () => (
  //   <Box
  //     sx={{ width: 300, height: 475, borderRadius: 20, margin: "0 auto" }}
  //     role="presentation"
  //   >
  //     <div>
  //       <QRCode
  //         style={{
  //           height: "auto",
  //           maxWidth: "100%",
  //           width: "100%",
  //           padding: 20,
  //           marginBottom: 30,
  //         }}
  //         value="Hello"
  //         viewBox={`0 0 256 256`}
  //       />
  //       <h1 style={{ fontFamily: "Bold" }}>Use this QR Code for Lipa fare </h1>
  //       <p style={{ fontFamily: "Regular", fontSize: 13 }}>
  //         A transaction will be carried out to your wallet and an SMS alert will
  //         be sent to you upon successful payment
  //       </p>
  //     </div>
  //   </Box>
  // );

  const SupportView = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <div
        style={{
          // margin: "0 auto",
          padding: "1rem 2rem ",
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <InfoOutlined style={{ fontSize: "2rem" }} />

        <div>
          <h1
            style={{
              fontFamily: "Regular",
              fontWeight: 800,
              fontSize: "1.6rem",
              marginBottom: "1rem",
            }}
          >
            Reach out to us
          </h1>
          <p style={{ fontFamily: "Regular", fontSize: "1.4rem" }}>
            Hi! Our team will work to respond to you within the next 24hrs. If
            you require immeediate assistance please do call us at anytime
            during office hours. In the meantime feel free to reach us
          </p>
        </div>
      </div>

      <List
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ListItem>
          <ListItemButton
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "#696047",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "2.5rem",
                paddingRight: "0rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Mailbox />
            </ListItemIcon>

            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Email
            </p>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "#696047",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "2.5rem",
                paddingRight: "0rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Telephone />
            </ListItemIcon>

            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Phone
            </p>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "#696047",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "2.5rem",

                paddingRight: "0rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Whatsapp />
            </ListItemIcon>

            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Whatsapp
            </p>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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
                  <DialogTitle style={{ fontSize: 18, fontFamily: "Bold" }}>
                    {"Fare points"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      style={{ fontSize: 14, fontFamily: "Regular" }}
                    >
                      Your Tap&go Rider points are 10. Ride more with Tap&go to
                      earn more points.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={closeFarepoints}
                      style={{
                        fontSize: 14,
                        fontFamily: "Light",
                        color: "#e3762b",
                      }}
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
                  {DrawerView("bottom")}
                </SwipeableDrawer>
              </>

              {/* Pay Utilities: COMING SOON */}
              <>
                <div className="actions-card link" onClick={openFeature}>
                  <BarChart className="actions-icon" />{" "}
                  <span className="actions-name">Pay Utilities</span>
                </div>
                <ComingSoon open={newFeature} close={closeFeature} />
                {/* <Dialog
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
              </Dialog> */}
              </>

              {/* Parcels: COMING SOON */}
              <>
                <div className="actions-card link" onClick={openFeature}>
                  <BoxSeam className="actions-icon" />{" "}
                  <span className="actions-name">Parcels</span>
                </div>
                <ComingSoon open={newFeature} close={closeFeature} />
              </>

              {/* Support */}
              <>
                <div onClick={openSupport} className="actions-card link">
                  <Receipt className="actions-icon" />{" "}
                  <span className="actions-name">Support</span>
                </div>
                <Drawer anchor="bottom" open={support} onClose={closeSupport}>
                  {SupportView("bottom")}
                </Drawer>
              </>
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
                Enjoy a variety of discounts, verification badge and creator
                mode by having more fare points
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
              open={lipaFare}
              onClose={closeLipaFare}
            >
              {DrawerView("bottom")}
            </SwipeableDrawer>
          </>
        </section>
      </main>
    </>
  );
};
