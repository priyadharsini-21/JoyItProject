import React from "react";
import { ColorRing } from "react-loader-spinner";
import { Box } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Box w={"full"} h={"80%"}>
      <ColorRing
        visible={true}
        height="500"
        width="500"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Box>
  );
};

export default LoadingPage;
