const express = require("express");
// import { Express } from "express";
// import cors from "cors";
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/register", (req, res) => {
  res.send({
    token: `${Math.floor(Math.random() * 10)}`,
  });
});

app.listen(8080, () => console.log("API is running on port 8080"));
