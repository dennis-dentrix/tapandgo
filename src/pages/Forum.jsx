import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Avatar } from "@mui/material";

import {
  ArrowLeft,
  CheckCircleFill,
  ChatLeftDots,
} from "react-bootstrap-icons";
import "./styles/forum.scss";

export const Forum = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate("/");
  const iconStyle = {
    color: "#e3762b",
  };
  return (
    <section
      className="main-forum"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="section-top">
        <ArrowLeft onClick={handleHome} />
        <h2 className="section-heading">Forum</h2>
      </div>

      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="190"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </section>
  );
};
