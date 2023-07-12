import React, { useState } from "react";
import * as component from "@mui/material";

export const Qrcode = () => {
  const [drawer, setDrawer] = useState(false);

  const action = (
    <>
      <ButtonComponent
        color="secondary"
        size="medium"
        onClick={handleCloseCopy}
        sx={{ fontSize: 15 }}
      >
        UNDO
      </ButtonComponent>
      <IconButtonComponent
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseCopy}
      >
        <Close style={{ fontSize: "16px" }} />
      </IconButtonComponent>
    </>
  );

  return <div>Qrcode</div>;
};
