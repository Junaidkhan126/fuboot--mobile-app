import { Container, Grid, Typography, Box, Stack, Button } from "@mui/material";
const DownloadSection = () => {
  return (
    <Box sx={{ bgcolor: "#F8F9F9", pb: 10 }}>
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid item xs={12} p={{ sm: 8, xs: 14 }} pt={{ xs: 0 }}>
            <Box>
              <img src="/square.svg" alt="" />
            </Box>
          </Grid>
          <Grid
            item
            container
            md={12}
            sx={{
              backgroundColor: "#EE5A55",
              borderRadius: "60px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                pl: { md: 15, xs: 4 },
                pt: { md: 10, sm: 4, xs: 0 },
                pb: { md: 10, xs: 4 },
                order: { sm: 2, md: 1, xs: 2 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "Avenir",
                  fontSize: { md: "64px", xs: "32px" },
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "134%",
                  textTransform: "capitalize",
                  pb: 2,
                }}
              >
                download <br /> the app now
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Button
                  href="https://play.google.com/store/fuboot"
                  target="_blank"
                  sx={{ p: 0 }}
                >
                  <img src="/android.svg" alt="" />
                </Button>
                <Button
                  href="https://www.apple.com/fuboot"
                  target="_blank"
                  sx={{ p: 0 }}
                >
                  {" "}
                  <img src="/apple.svg" alt="" />
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ order: { sm: 2, xs: 1 } }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "block" },
                  justifyContent: "center",
                  marginTop: { lg: -28, md: -24, sm: -16, xs: -13 },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "400px", md: "100%" },
                    width: { xs: "400px", md: "100%" },
                  }}
                >
                  <img
                    src="Dowloed.png"
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadSection;
