import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";

const Cards = ({ cardObj }) => {
  //console.log("🚀 ~ Cards ~ cardObj:", cardObj);
  return (
    <>
      <Card key={cardObj.id} sx={{ maxWidth: 345 }}>
        <CardMedia
          //sx={{ height:40 }}
          children={<Carousel imgArray={cardObj.images}></Carousel>}
          title={cardObj.title}
        />
        <CardContent style={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h6" component="div">
            {cardObj.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardObj.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardObj.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
