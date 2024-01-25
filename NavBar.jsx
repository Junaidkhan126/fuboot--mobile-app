import { Button, AppBar, Toolbar, Typography, Stack } from "@mui/material"; // export
// import Button from "@mui/material/Button"; /// export default
// import AppBar from "@mui/material/AppBar"; /// export default
import React from "react";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <AppBar sx={{ background: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography
            variant="h4"
            color="#000"v
            fontFamily={"Avenir"}
            fontWeight={"bold"}
            component={Link}
            to="/"
            sx={{ textDecoration: "none" }}
          >
            Fuboot
          </Typography>
          <Stack direction="row" gap={2}>
            <Typography
              variant="h6"
              fontFamily={"Avenir"}
              color="#000"
              component={Link}
              to="/about"
              sx={{ textDecoration: "none" }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"Avenir"}
              color="#000"
              component={Link}
              to="/features"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              Features
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"Avenir"}
              color="#000"
              sx={{ textDecoration: "none" }}
              component={Link}
              to="/video"
            >
              Videos
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"Avenir"}
              color="#000"
              sx={{ textDecoration: "none" }}
              component={Link}
              to="/faqs"
            >
              FAQs
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"Avenir"}
              color="#000"
              sx={{ textDecoration: "none" }}
              component={Link}
              to="/learn"
            >
              Learn
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap={2}
            sx={{
              backgroundColor: "rgb(248, 249, 249)",
              p: 1,
              border: "1px solid #000",
              borderRadius: 1,
            }}
          >
            <Button fontFamily={"Avenir"} sx={{ color: "#000" }}>
              Login
            </Button>
            <Button
              fontFamily={"Avenir"}
              variant="contained"
              sx={{ background: "#ee5a55" }}
            >
              Signup
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </>
  );
};
export default NavBar;
