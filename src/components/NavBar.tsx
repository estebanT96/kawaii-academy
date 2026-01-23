import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logoFace.png";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          background: "rgb(255, 252, 242)", //Color de fondo
          paddingLeft: "20px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            alignItems: "center",
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              height: { xs: "42px", md: "52px" },
            }}
          >
            <img src={logo} alt="" height="100%" />
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                fontSize="16px"
                fontWeight="800"
                margin="0 5px"
              >
                Kawaii
              </Typography>
              <Typography variant="body2" fontSize="16px" fontWeight="800">
                Academy
              </Typography>
            </Box>
          </Box>
          <Box height="100%" display={{ xs: "none", sm: "none", md: "block" }}>
            <NavBarLinks />
          </Box>
          <MobileNavLinks />
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
