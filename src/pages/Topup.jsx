// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowBack } from "@mui/icons-material";
// import { CardForm } from "../components";
// import { MpesaForm } from "../components";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { TextField } from "@mui/material";
// import "./styles/topup.scss";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export const Topup = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           centered
//           textColor="tertially"
//           indicatorColor="secondary"
//           variant="fullWidth"
//         >
//           <Tab label="MPESA" {...a11yProps(0)} />
//           <Tab label="CARD" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           label="Name"
//           type="text"
//           fullWidth
//           variant="outlined"
//           style={{ marginTop: "1rem" }}
//         />

//         <TextField
//           margin="dense"
//           id="email"
//           label="Email Address"
//           type="text"
//           fullWidth
//           variant="outlined"
//           style={{ marginTop: "1rem" }}
//         />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//     // <section className="topup">
//     //   <div className="topup-content">
//     //     <header className="topup-header">
//     //       <div className="topup-header__top">
//     //         <Link to="/" className="link topup-link">
//     //           {/* <ArrowBack /> */}
//     //           <h2 className="topup-heading">Topup</h2>
//     //         </Link>
//     //       </div>

//     //       <div className="topup-option">
//     //         <a className="topup-option__card " onClick={handleOptionMpesa}>
//     //           <span className={active ? "topup-option__active" : ""}>
//     //             Mpesa
//     //           </span>
//     //         </a>

//     //         <a className="topup-option__card" onClick={handleOptionCard}>
//     //           <span className={active ? "" : "topup-option__active"}>Card</span>
//     //         </a>
//     //       </div>
//     //     </header>
//     //     {active ? <MpesaForm /> : <CardForm />}
//     //   </div>
//     // </section>
//   );
// };
