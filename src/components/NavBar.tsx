import { Box, Link, Stack, Typography } from "@mui/material";
import logo from "../assets/logoFace.png";
import NavBarLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";
import BackgroundMusic from "./BackgroundMusic";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

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
          <Link
            key={links[1].id}
            component={RouterLink}
            underline="none"
            to={links[1].path}
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
                <Typography
                  fontWeight="800"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    marginBottom: { xs: "-3px", sm: "-7px" },
                  }}
                >
                  Kawaii Academy
                </Typography>
                <Typography sx={{ fontSize: { xs: "9px", sm: "12px" } }}>
                  Learn Japanese the fun way.
                </Typography>
              </Box>
            </Box>
          </Link>
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
