import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DrawerView, ComingSoon } from "../components";
import { Register } from "./Register";
import useToken from "../../Hooks/useToken";

// React bootstrap icons
import {
  Wallet,
  ArrowLeftRight,
  ArrowUpRightCircle,
  ArrowDownLeftCircle,
  Chat,
  QrCode,
  ArrowClockwise,
  Eye,
  EyeSlash,
  Lightbulb,
  InfoCircle,
} from "react-bootstrap-icons";

// MATERIAL UI COMPONENTS
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Snackbar,
  IconButton,
  Drawer,
} from "@mui/material";
import { Close, ContentCopy } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./styles/home.scss";

// This is the greeting section used
function Greeting({ user }) {
  const time = () => {
    let today = new Date();
    let hrs = today.getHours();
    let greeting;
    if (hrs >= 0 && hrs < 12) {
      greeting = "Good morning";
    } else if (hrs > 13 && hrs < 18) {
      greeting = "Good afternoon";
    } else if (hrs > 19 && hrs < 0) {
      console.log(hrs);
      greeting = "Good Evening";
    }
    return greeting;
  };
  return (
    <div className="home-intro" style={{ marginTop: "2rem" }}>
      <Avatar sx={{ bgcolor: "orange" }} style={{ marginRight: "1rem" }}>
        DK
      </Avatar>
      <div className="home-intro__greet">
        <p className="greeting">{time()}</p>
        <p className="name">{user.name}</p>
      </div>
    </div>
  );
}

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#e3762b",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#696047",
    },
    "&:hover fieldset": {
      borderColor: "#696047",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e3762b",
    },
  },
});

export const Home = () => {
  const { token, setToken } = useToken();
  const [showBal, setShowBal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sendFare, setSendfare] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [kopaFare, setKopafare] = useState(false);
  const [forum, setForum] = useState(false);

  // token for authentication
  if (!token) {
    {
      return <Register setToken={setToken} />;
    }
  }

  const handleSendOpen = () => setSendfare(true);
  const handleSendClose = () => setSendfare(false);
  const handleOpenWallet = () => setWallet(true);
  const handleCloseWallet = () => setWallet(false);
  const openKopa = () => setKopafare(true);
  const closeKopa = () => setKopafare(false);
  const openForum = () => setForum(true);
  const closeForum = () => setForum(false);
  const handleOpenDrawer = () => setDrawer(true);
  const handleCloseDrawer = () => setDrawer(false);
  const handleCopy = () => setCopied(true);
  const handleCloseCopy = () => {
    setCopied(false);
  };

  const user = [
    {
      name: "Denis Mutonga",
      email: "denkyusya@gmail.com",
      balance: 30500.0,
      accNumb: "Th9381452",
    },
  ];

  // For copy snackbar
  const action = (
    <>
      <Button
        color="secondary"
        size="medium"
        onClick={handleCloseCopy}
        sx={{ fontSize: 15, color: "#e3762b" }}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseCopy}
      >
        <Close style={{ fontSize: "16px" }} />
      </IconButton>
    </>
  );

  // For kopa fare snackbar
  const kopaAction = (
    <>
      <Button
        color="secondary"
        size="medium"
        onClick={handleCloseCopy}
        sx={{ fontSize: 15, color: "#e3762b", fontFamily: "Regular" }}
      >
        Dismiss
      </Button>
    </>
  );

  // Drawer content for QRCode

  const handleBlur = () => {
    return setShowBal((show) => !show);
  };

  if (token) {
    return (
      <>
        <main className="main">
          <section className="home">
            {user.map((user) => (
              <Greeting user={user} key={user.accNumb} />
            ))}
            <div className="home-landing">
              {/* Balance card */}
              <div className="home-landing__content">
                <div className="home-card ">
                  <div className="home-card__view">
                    <p
                      className="home-card__text"
                      style={{
                        fontFamily: "Regular",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Balance
                      <span className="hide" onClick={handleBlur}>
                        {showBal ? (
                          <Eye fontSize="2rem" />
                        ) : (
                          <EyeSlash fontSize="1.7rem" />
                        )}
                      </span>
                    </p>

                    <div className="home-card__amount">
                      <h3 className="home-card__bal">
                        KES
                        <span className={showBal ? "blur" : ""}>
                          {" "}
                          {user.map((user) => user.balance)}
                        </span>
                      </h3>

                      <ArrowClockwise fontSize="2rem" />
                    </div>
                  </div>

                  <div></div>
                  <div className="home-card__wallet">
                    <p className="home-card__text">Wallet number</p>
                    <div className="home-card__value">
                      <h3
                        className="home-card__numb"
                        style={{
                          fontSize: "1.25rem",
                          fontFamily: "Bold",
                          marginTop: ".6rem",
                        }}
                      >
                        {user.map((user) => user.accNumb)}
                      </h3>

                      <>
                        <CopyToClipboard
                          text={user.map((user) => user.accNumb)}
                          onCopy={() => setCopied(true)}
                        >
                          <ContentCopy onClick={handleCopy} />
                        </CopyToClipboard>

                        <Snackbar
                          open={copied}
                          autoHideDuration={2000}
                          onClose={handleCloseCopy}
                          message="Copied to clipboard"
                          action={action}
                        />
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick actions */}
            <div className="actions">
              <h1 className="actions-title">Quick Actions</h1>

              <div className="actions-container">
                {/* Wallet topup */}
                <>
                  <div className="actions-card link" onClick={handleOpenWallet}>
                    <Wallet className="actions-icon" />{" "}
                    <span className="actions-name">Wallet Topup</span>
                  </div>

                  <Dialog open={wallet} onClose={handleCloseWallet}>
                    <DialogTitle sx={{ fontSize: 15, fontFamily: "Bold" }}>
                      Topup with Mpesa
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        sx={{
                          fontSize: 15,
                          fontFamily: "Regular",
                          marginBottom: 3,
                          display: "flex",
                          alignItems: "flexstart",
                          gap: 1,
                        }}
                      >
                        <InfoCircle
                          style={{ color: "#e3762b", fontSize: "2rem" }}
                        />
                        <p style={{ color: "#2e3532" }}>
                          Enter phone number & amount to be topup fare
                        </p>
                      </DialogContentText>

                      <CssTextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        multiline
                        id="name"
                        type="number"
                        fullWidth
                        label="Phone Number"
                        placeholder="e.g 07012345678"
                        InputProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: 16,
                            fontFamily: "Regular",
                          },
                        }}
                        className="textfield"
                      />

                      <CssTextField
                        variant="outlined"
                        margin="dense"
                        multiline
                        id="name"
                        type="text"
                        fullWidth
                        label="Amount"
                        placeholder="e.g 1000"
                        InputProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                        InputLabelProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                      />

                      <Button
                        variant="contained"
                        onClick={handleCloseWallet}
                        sx={{
                          bgcolor: "#e3762b",
                          fontSize: 15,
                          fontFamily: "Light",
                          width: "auto",
                          marginTop: 3,
                          borderRadius: 2,
                          float: "Right",
                        }}
                      >
                        Topup
                      </Button>
                    </DialogContent>
                  </Dialog>
                </>

                {/* Lipa fare */}
                <div>
                  <div className="actions-card actions-card__1">
                    <QrCode className="actions-icon" />{" "}
                    <span className="actions-name" onClick={handleOpenDrawer}>
                      Lipa Fare
                    </span>
                  </div>

                  <Drawer
                    anchor="bottom"
                    open={drawer}
                    onClose={handleCloseDrawer}
                  >
                    {DrawerView("bottom")}
                  </Drawer>
                </div>

                {/* Send fare */}
                <>
                  <div className="actions-card" onClick={handleSendOpen}>
                    <ArrowUpRightCircle className="actions-icon" />{" "}
                    <span className="actions-name">Send Fare</span>
                  </div>
                  <Dialog open={sendFare} onClose={handleSendClose}>
                    <DialogTitle sx={{ fontSize: 15, fontFamily: "Bold" }}>
                      Send fare
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        sx={{
                          fontSize: 15,
                          fontFamily: "Regular",
                          marginBottom: 3,
                          display: "flex",
                          alignItems: "flexstart",
                          gap: 1,
                        }}
                      >
                        <InfoCircle
                          style={{ color: "#e3762b", fontSize: "2rem" }}
                        />
                        Enter account number & amount to be transferred
                      </DialogContentText>

                      <CssTextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        multiline
                        id="name"
                        type="number"
                        fullWidth
                        label="Account Number"
                        placeholder="e.g sukge5665"
                        InputProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: 16,
                            fontFamily: "Regular",
                          },
                        }}
                      />
                      <CssTextField
                        variant="outlined"
                        margin="dense"
                        multiline
                        id="name"
                        type="text"
                        fullWidth
                        label="Amount"
                        placeholder="e.g 1000"
                        InputProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                        InputLabelProps={{
                          style: { fontSize: 16, fontFamily: "Regular" },
                        }}
                      />

                      <Button
                        variant="contained"
                        onClick={handleSendClose}
                        sx={{
                          bgcolor: "#e3762b",
                          fontSize: 15,
                          fontFamily: "Light",
                          width: "auto",
                          marginTop: 3,
                          borderRadius: 2,
                          float: "Right",
                        }}
                      >
                        Send fare
                      </Button>
                    </DialogContent>
                  </Dialog>
                </>

                {/* Receive fare */}
                <>
                  <div className="actions-card" onClick={handleOpenDrawer}>
                    <ArrowDownLeftCircle className="actions-icon" />{" "}
                    <span className="actions-name">Receive Fare</span>
                  </div>
                  <Drawer
                    anchor="bottom"
                    open={drawer}
                    onClose={handleCloseDrawer}
                  >
                    {DrawerView("bottom")}
                  </Drawer>
                </>

                {/* Kopa fare */}
                <>
                  <div className="actions-card" onClick={openKopa}>
                    <ArrowLeftRight className="actions-icon" />{" "}
                    <span className="actions-name">Kopa Fare</span>
                  </div>

                  <Snackbar
                    open={kopaFare}
                    autoHideDuration={2000}
                    onClose={closeKopa}
                    message="You are not eligible for kopa fare. Please ride more with Tap&Go to earn more fare points."
                    action={kopaAction}
                    sx={{ fontSize: 25 }}
                  />
                </>

                {/* Forum */}

                <>
                  <div className="actions-card link" onClick={openForum}>
                    <Chat className="actions-icon" />{" "}
                    <span className="actions-name">Forum</span>
                  </div>
                  <ComingSoon open={forum} close={closeForum} />
                </>
              </div>
            </div>
            <div className="foot" style={{ marginBottom: "4rem" }}>
              <Lightbulb
                style={{ fontSize: "4rem" }}
                className="actions-icon"
              />
              <div className="foot-content">
                <h2
                  className="foot-heading"
                  style={{ fontSize: "1.3rem", marginBottom: ".5rem" }}
                >
                  Simple Smart Life
                </h2>
                <p className="foot-desc">
                  Acess limitless capabilities of cashless matatu payment
                  anytime, anywhere with anyone
                </p>
              </div>
            </div>
            <br />
          </section>
        </main>
      </>
    );
  }
};
