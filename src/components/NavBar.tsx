import { Box, Button, Link, Stack, Typography } from "@mui/material";
import logo from "../assets/kitsuneBlueHachimakiface.jpeg";
import logoLetters from "../assets/kitsuneBlueHachimakiletters.jpeg";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          padding: "5px",
          background: "rgb(254,248,230)",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "54px" }}>
          <img src={logo} alt="" height="100%" />
          <img src={logoLetters} alt="" height="100%" />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          width="25%"
          paddingRight={5}
        >
          <Link component={RouterLink} underline="hover" to="/" color="rgb(240, 78, 28)"
          >
            Study
          </Link>
          <Link component={RouterLink} underline="hover" to="/learn" color="rgb(240, 78, 28)"
          >
            Learn
          </Link>
          <Link component={RouterLink} underline="hover" to="/about" color="rgb(240, 78, 28)"
          >
            About Us
          </Link>
          <Link component={RouterLink} underline="hover" to="/contact" color="rgb(240, 78, 28)"
          >
            Contact
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
