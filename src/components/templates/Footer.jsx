import React from "react";
import { Box, chakra, Container, Stack, Text, Center } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"grey"}
      rounded={"full"}
      w={30}
      h={30}
      cursor={"pointer"}
      pt={10}
      pl={10}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "whiteAlpha.200",
      }}
    >
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box as={"footer"} bg={"grey"} color={"white"} className="footer">
      <Center>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 - PriyaDharsini for Vivirti Capital </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/priya-dharsini-100430121/"}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Git Hub"} href={"#"}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Center>
    </Box>
  );
};

export default Footer;
