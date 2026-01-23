import { Box, Stack } from "@mui/material";
import logo from "../assets/logoFace.png";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          background: "#f1d302",
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
              height: "76px",
              borderLeft: "2px solid black",
              borderRight: "2px solid black",
            }}
          >
            <img src={logo} alt="" height="100%" />
            {/* <Box display="flex" flexDirection="column" alignItems="center">
              <Typography  fontSize="20px" fontWeight="900">Kawaii</Typography>
              <Typography marginTop="-10px" fontSize="16px" fontWeight="800">Academy</Typography>
            </Box> */}
          </Box>
          <Box
            borderLeft="2px solid black"
            borderRight="2px solid black"
            height="100%"
            padding="26px"
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <NavBarLinks />
          </Box>
          <MobileNavLinks />
        </Stack>
      </Box>
    </>
  );
};

export default NavBar;
