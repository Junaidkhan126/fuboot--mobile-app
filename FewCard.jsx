import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const FewCard = () => {
  return (
    <>
      <Box sx={{ background: "#F8F9F9", py: 9 }}>
        <Container maxWidth={"lg"} style={{ margin: "0px auto" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#042C5C",
              textAlign: "center",
              fontFamily: "Avenir",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "134%",
              textTransform: "capitalize",
            }}
          >
            Few Awesome Features
          </Typography>
          <Grid container sx={{ py: 3 }} spacing={7}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{ pb: 3, pt: 10, px: 2, borderRadius: "4px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img src="manage.png" alt="" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#042C5C",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 800,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                    mb: 1,
                  }}
                >
                  manage records
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#77869E",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                  }}
                >
                  Create and maintaining a plan is very easy
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{ pb: 3, pt: 10, px: 2, borderRadius: "4px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img src="reminders.png" alt="" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#042C5C",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 800,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                    mb: 1,
                  }}
                >
                  Reminders
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#77869E",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                  }}
                >
                  Set timely reminders of payments
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{ pb: 3, pt: 10, px: 2, borderRadius: "4px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img src="monitor.png" alt="" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#042C5C",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 800,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                    mb: 1,
                  }}
                >
                  monitor
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#77869E",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                  }}
                >
                  Monitor members and their payments on the go
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{ pb: 3, pt: 10, px: 2, borderRadius: "4px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img src="secure-payment.png" alt="" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#042C5C",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 800,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                    mb: 1,
                  }}
                >
                  secure payments
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#77869E",
                    textAlign: "center",
                    fontFamily: "Avenir",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "134%",
                    textTransform: "capitalize",
                  }}
                >
                  Proof of payments can be added
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FewCard;
