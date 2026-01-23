import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logoFace.png";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";

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
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                fontWeight="800"
                margin="0 5px"
                sx={{ fontSize: { xs: "14px", md: "16px" } }} 
              >
                Kawaii
              </Typography>
              <Typography
                variant="body2"
                fontWeight="800"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
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
