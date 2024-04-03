import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Banner.css";

const Banner = ({ title, description }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(168,20,35,1) 100%`,
        color: "white",
      }}
    >
      <CardContent className="cardStyle">
        <Typography variant="h5" style={{ textAlign: "left" }} component="div">
          {title}
        </Typography>
        <Typography variant="body2" style={{ textAlign: "left" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Banner;
