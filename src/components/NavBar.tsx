import { Box, Stack } from "@mui/material";
import logo from "../assets/kitsuneBlueHachimakiface.jpeg";
import logoLetters from "../assets/kitsuneBlueHachimakiletters.jpeg";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          background: "rgba(254, 248, 230)",
          padding: "5px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Box sx={{ height: "46px" }}>
            <img src={logo} alt="" height="100%" />
            <img src={logoLetters} alt="" height="100%" />
          </Box>
          <NavBarLinks />
          <MobileNavLinks />
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
