import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";

const Carousel = ({ imgArray }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  if (imgArray.length < 2) {
    return (
      <Image
        rounded={"lg"}
        height={330}
        width={328}
        objectFit={"cover"}
        src={imgArray[0]}
        borderRadius={"10px"}
      />
    );
  } else {
    return (
      <Slider {...settings}>
        {imgArray.map((image) => (
          <Image
            rounded={"lg"}
            height={330}
            width={382}
            objectFit={"cover"}
            src={image}
            borderRadius={"10px"}
          />
        ))}
      </Slider>
    );
  }
};

export default Carousel;
