import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Static = () => {
  return (
    <>
      <Box
        sx={{ background: "linear-gradient(180deg, #0047CC 0%, #EE5A55 100%)" }}
      >
        <Container maxWidth={"md"} style={{ margin: "0px auto" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Avenir",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "134%" /* 42.88px */,
              textTransform: "capitalize",
              pt: 4,
            }}
          >
            Statistics
          </Typography>
          <Grid container sx={{ py: 3 }} spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ background: "none" }} elevation={0}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  15,000+
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#F8F9F9",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  registered users
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ background: "none" }} elevation={0}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  1500+
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#F8F9F9",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  Plans
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ background: "none" }} elevation={0}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  14,000+
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#F8F9F9",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  total downloads
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ background: "none" }} elevation={0}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  125,000+
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#F8F9F9",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%" /* 42.88px */,
                    textTransform: "capitalize",
                  }}
                >
                  total contributions
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Static;
