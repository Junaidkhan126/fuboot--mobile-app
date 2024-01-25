import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import React from "react";

const Main = () => {
  return (
    <Box
      sx={{
        height: "545px",
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("back.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            bottom: 30,
            left: { xs: 5, md: 20 },
            zIndex: 1,
          }}
        >
          <IconButton href="https://www.facebook.com/fuboot" target="_blank">
            <FaFacebookF
              style={{ color: "#fff", width: "18px", height: "18px" }}
            />
          </IconButton>
          <IconButton href="https://www.instagram.com/fuboot" target="_blank">
            <FaInstagram
              style={{ color: "#fff", width: "18px", height: "18px" }}
            />
          </IconButton>
          <IconButton href="https://www.twitter.com/fuboot" target="_blank">
            <FaTwitter
              style={{ color: "#fff", width: "18px", height: "18px" }}
            />
          </IconButton>
          <IconButton href="https://www.linkedin.com/fuboot" target="_blank">
            <FaLinkedinIn
              style={{ color: "#fff", width: "18px", height: "18px" }}
            />
          </IconButton>
                  
        </Stack>
        <Container
          maxWidth={"md"}
          sx={{ position: "relative", textAlign: "center" }}
        >
          <Box py={{ sm: 2, md: 5 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Avenir",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "134%",
                textTransform: "capitalize",
                pt: 4,
                pb: 2,
              }}
            >
              Revolutionizing the world of Savings
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Avenir",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "134%",
                textTransform: "capitalize",
                pb: 1,
              }}
            >
              download now
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Button
                href="https://play.google.com/store/fuboot"
                target="_blank"
              >
                <img src="/android.svg" alt="" />
              </Button>
              <Button href="https://www.apple.com/fuboot" target="_blank">
                <img src="/apple.svg" alt="" />
              </Button>
            </Stack>
          </Box>
          <Box sx={{ position: "absolute", left: 0, right: 0 }}>
            {/* */}
            <Box sx={{ display: { xs: "none", sm: "block" }, px: 5 }}>
              <img
                src="/fuboot-layout.png"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: 4 }}>
              <img src="/fuboot-layout-2.png" alt="" width={240} height={430} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Main;
