import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Aboutext = () => {
  return (
    <>
      <Box
        sx={{
          background: "url(/second-section.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ pb: "10%" }}>
            <img src="square.svg" alt="" />
          </Box>
          <Box sx={{ maxWidth: "508px" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#042C5C",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Avenir",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "134%",
                textTransform: "capitalize",
                pb: 1.5,
              }}
            >
              About Fuboot
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#77869E",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Avenir",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "134%",
                pb: 5,
              }}
            >
              Fuboot is your digital escape from the hassle of maintaining and
              building a kameti. No moremanual records or paperwork, kameti
              management becomes digital.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Aboutext;
