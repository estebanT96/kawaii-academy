import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logoFace.png";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";
import BackgroundMusic from "./BackgroundMusic";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          background: "#4797ed",
          paddingLeft: "20px",
          paddingTop: { xs: "0", md: "5px" },
          paddingBottom: { xs: "0", md: "5px" },
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
              height: { xs: "48px", md: "54px" },
            }}
          >
            <img src={logo} alt="" height="100%" />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="5px"
              color="white"
            >
              <Typography fontWeight="800" fontSize="16px" marginBottom="-7px">
                Kawaii Academy
              </Typography>
              <Typography fontSize="12px">
                Learn Japanese the fun way.
              </Typography>
            </Box>
          </Box>
          <Box height="100%" display={{ xs: "none", sm: "none", md: "flex" }}>
            <Box marginRight="10px">
              <BackgroundMusic />
            </Box>
            <NavBarLinks />
          </Box>
          <MobileNavLinks />
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
