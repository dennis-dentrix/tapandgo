import QRCode from "react-qr-code";

import { Box } from "@mui/material";

export const DrawerView = () => (
  <Box sx={{ width: 300, height: 550, margin: "0 auto" }} role="presentation">
    <div>
      <QRCode
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "100%",
          padding: 20,
          marginBottom: 30,
        }}
        value="hello"
        viewBox={`0 0 256 256`}
      />
      <div style={{}}>
        <h1 style={{ fontFamily: "Bold", fontSize: 20 }}>
          Use this QR Code for Lipa fare{" "}
        </h1>
        <p style={{ fontFamily: "Regular", fontSize: 15 }}>
          A transaction will be carried out to your wallet and an SMS alert will
          be sent to you upon successful payment
        </p>
      </div>
    </div>
  </Box>
);
