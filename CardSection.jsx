import { Typography, Container, Box } from "@mui/material";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const CardSection = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 1024 },
  //     items: 1,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <Box
      sx={{
        bgcolor: "#F8F9F9",
        backgroundImage: "url(/lol3.png) ",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pt: 16,
        pb: 12,
      }}
    >
      <Container maxWidth={"lg"}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#042C5C",
            textAlign: "center",
            fontFamily: "Avenir",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "134%",
            textTransform: "capitalize",
            pb: 4,
          }}
        >
          customer testimonials
        </Typography>
        {/* <Carousel responsive={responsive} infinite> */}
        <Container
          maxWidth={"md"}
          sx={{
            display: { xs: "flex", md: "block" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "center" },
              p: 2,
              bgcolor: "#fff",
              borderRadius: "8px",
              width: { xs: "250px", md: "100%" },
            }}
          >
            <Box
              sx={{
                width: { sm: "100%", xs: "200px" },
                height: { sm: "232px", xs: "180px" },
                pb: { xs: 2, md: 0 },
              }}
            >
              <img
                src="video.jpg"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ pl: { md: 9 } }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#77869E",
                  fontFamily: "Avenir",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%",
                  pb: 3,
                }}
              >
                Their professional staff, their prompt replies and their
                thoughtfully sorted processes are an add up to this start-up.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#042C5C",
                  fontFamily: "Avenir",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%",
                }}
              >
                Robert W.
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* </Carousel> */}
      </Container>
    </Box>
  );
};

export default CardSection;
