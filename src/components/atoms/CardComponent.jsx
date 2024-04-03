import React from "react";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";
import StarRating from "../atoms/StarRating";

const IMAGE = "https://source.unsplash.com/random/200x200?sig=1";

const CardComponent = ({ cardObj }) => {
  console.log(cardObj, "cardObj");
  const cardStyle = {
    padding: "16px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Box
      role={"group"}
      maxW={"330px"}
      w={"full"}
      h={"550"}
      bg={"white"}
      color={"black"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      key={cardObj.id}
      borderColor={"black"}
      border="1px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      style={cardStyle}
    >
      <Box
        rounded={"lg"}
        mt={0}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${IMAGE})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Carousel imgArray={cardObj.images}></Carousel>
      </Box>
      <Stack pt={100} gap={10} mt={5}>
        <Heading fontSize={"2xl"} as="h3" m={0}>
          {cardObj.title}
        </Heading>
        <Text mt={5}>{cardObj.description}</Text>
        <Heading fontSize={"2xl"} as="h2" mt={5}>
          ${cardObj.price}
        </Heading>
        <StarRating rating={cardObj.rating} />
      </Stack>
    </Box>
  );
};

export default CardComponent;
