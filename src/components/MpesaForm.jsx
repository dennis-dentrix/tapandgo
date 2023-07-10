import React from "react";
import { InfoOutlined } from "@mui/icons-material";
import { TextField, Box } from "@mui/material";

export const MpesaForm = () => {
  return (
    <div className="content">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 4, width: "25ch" },
        }}
      >
        <TextField label="Phone Number" variant="outlined" fullWidth />
      </Box>
      {/* <p className="content-info">
        <InfoOutlined />
        Enter Phone number and amount to topup fare
      </p> */}

      {/* // <div className="form-container">
      //   <form className="form">
      //     <div className="form-group">
      //       <label htmlFor="phoneNumber" className="form-label">
      //         Phone Number
      //       </label>
      //       <input
      //         type="text"
      //         className="form-input"
      //         name="phoneNumber"
      //         id="phoneNumber"
      //         placeholder=""
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="password" className="form-label">
      //         Amount
      //       </label>
      //       <input
      //         type="text"
      //         name="text"
      //         className="form-input"
      //         id="password"
      //         placeholder=""
      //       />
      //     </div>
      //     <button className="form-submit">Top up</button>
      //   </form>
      // </div> */}
    </div>
  );
};
