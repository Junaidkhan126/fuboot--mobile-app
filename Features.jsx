import { Avatar, Container, Grid, Typography, Box, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Features = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ bgcolor: "#fff", py: { xs: 4, md: 7 } }}
      style={{ margin: "0px auto" }}
    >
      <Grid container>
        <Grid item sm={12} md={6}>
          <Box sx={{ height: { sm: "100%", md: "550px", lg: "100%" } }}>
            <img
              src="features.png"
              alt="img"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            py: { sm: "30px", lg: "60px" },
            px: { sm: "50px", lg: "100px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#042C5C",
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Avenir",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "134%" /* 42.88px */,
              textTransform: "capitalize",
            }}
          >
            why fuboot?
          </Typography>
          <Stack
            sx={{
              width: "100%",
              alignItems: "stretch",
              mt: "40px",
              pl: "25px",
            }}
            spacing={3}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#1BC773",
                  width: { xs: "18px", md: "24px" },
                  height: { xs: "18px", md: "24px" },
                  objectFit: "cover",
                }}
              >
                <CheckIcon color="inherit" fontSize="small" />
              </Avatar>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#77869E",
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "Avenir",
                  fontSize: { xs: "18px", md: "24px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%" /* 42.88px */,
                }}
              >
                Fuboot is your digital escape from the hassle of maintaining and
                building a kameti.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#1BC773",
                  width: { xs: "18px", md: "24px" },
                  height: { xs: "18px", md: "24px" },
                  objectFit: "cover",
                }}
              >
                <CheckIcon color="inherit" fontSize="small" />
              </Avatar>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#77869E",
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "Avenir",
                  fontSize: { xs: "18px", md: "24px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%" /* 42.88px */,
                }}
              >
                No more manual records or paperwork, kameti management becomes
                digital.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#1BC773",
                  width: { xs: "18px", md: "24px" },
                  height: { xs: "18px", md: "24px" },
                  objectFit: "cover",
                }}
              >
                <CheckIcon color="inherit" fontSize="small" />
              </Avatar>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#77869E",
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "Avenir",
                  fontSize: { xs: "18px", md: "24px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%" /* 42.88px */,
                }}
              >
                No more manual records or paperwork, kameti management becomes
                digital.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
