import {
  Container,
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
const Footer = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <Box sx={{ bgcolor: "#042C5C", py: 12 }}>
        <Container maxWidth={"lg"} disableGutters>
          <Grid container spacing={{ ld: 10, md: 5, xs: 10 }}>
            <Grid item md={3} xs={12}>
              <Box
                display={"flex"}
                alignItems={"start"}
                justifyContent={{ xs: "center", md: "left" }}
                height={"100%"}
                component={"a"}
                sx={{ cursor: "pointer" }}
                // onClick={() => navigate("/")}
              >
                <img src="/footer-logo.png" alt="" />
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "#FFF",
                  fontFamily: "Avenir",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  pb: 2,
                }}
              >
                Support
              </Typography>
              <Stack gap={3}>
                <Typography
                  variant="h4"
                  component={"a"}
                  //   onClick={() => navigate("/unsubscribe")}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#FFF",
                    fontFamily: "Avenir",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    position: "relative",
                    width: "100px",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "80%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#FFF",
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.5s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Unsbscribe
                </Typography>
                <Typography
                  variant="h4"
                  component={"a"}
                  //   onClick={() => navigate("/contact")}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#FFF",
                    fontFamily: "Avenir",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    position: "relative",
                    width: "100px",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "80%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#FFF",
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.5s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Contact Us
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "#FFF",
                  fontFamily: "Avenir",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  pb: 2,
                }}
              >
                Extras
              </Typography>
              <Stack gap={3}>
                <Typography
                  variant="h4"
                  component={"a"}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#FFF",
                    fontFamily: "Avenir",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    position: "relative",
                    width: "100px",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "38%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#FFF",
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 1.5s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Blog
                </Typography>
                <Typography
                  variant="h4"
                  component={"a"}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#FFF",
                    fontFamily: "Avenir",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    position: "relative",
                    width: "100px",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "70%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#FFF",
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.5s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Our Story
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#FFF",
                    fontFamily: "Avenir",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    pb: 2,
                  }}
                >
                  Follow Us
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={{ xs: "center", md: "left" }}
                  gap={1}
                  flexWrap={"wrap"}
                >
                  <IconButton
                    href="https://www.tiktok.com/fuboot"
                    target="_blank"
                  >
                    <Avatar
                      sx={{ bgcolor: "#0e4871", width: "40px", height: "40px" }}
                    >
                      <FaTiktok
                        style={{ color: "#fff", width: "25px", height: "25px" }}
                      />
                    </Avatar>
                  </IconButton>
                  <IconButton
                    href="https://www.instagram.com/fuboot"
                    target="_blank"
                  >
                    <Avatar
                      sx={{ bgcolor: "#0e4871", width: "40px", height: "40px" }}
                    >
                      <FaInstagram
                        style={{ color: "#fff", width: "30px", height: "30px" }}
                      />
                    </Avatar>
                  </IconButton>
                  <IconButton href={`https://wa.me/123456789`} target="_blank">
                    <Avatar
                      sx={{ bgcolor: "#0e4871", width: "40px", height: "40px" }}
                    >
                      <FaWhatsapp
                        style={{ color: "#fff", width: "30px", height: "30px" }}
                      />
                    </Avatar>
                  </IconButton>
                  <IconButton href={`tel:12345678`} target="_blank">
                    <Avatar
                      sx={{ bgcolor: "#0e4871", width: "40px", height: "40px" }}
                    >
                      <FiPhone
                        style={{ color: "#fff", width: "25px", height: "25px" }}
                      />
                    </Avatar>
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#77869E", py: 3 }}>
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Avenir",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          © 2023 All right reserved by Fuboot
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
