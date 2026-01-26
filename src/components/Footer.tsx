import { Box, Container, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/logoFace.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4797ed", 
        color: "white",
        marginTop: "auto", 
        paddingY: { xs: "15px", md: "20px" },
        borderTop: "1px solid rgb(255, 221, 0)", 
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "center" },
        alignItems: { xs: "center", md: "center" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            display="flex"
            sx={{
              alignItems: { xs: "center", md: "center" },
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
              >
                <Typography
                  fontWeight="800"
                  fontSize="16px"
                  marginBottom="-7px"
                >
                  Kawaii Academy
                </Typography>
                <Typography fontSize="12px">
                  Learn Japanese the fun way.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="caption" display="block" sx={{ opacity: 0.6 }}>
            © 2026 Esteban Tapia. All rights reserved.
          </Typography>

          <Box textAlign={{ xs: "center", md: "right" }}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                marginBottom: "3px",
                fontSize: { xs: "12px", md: "14px" },
                paddingTop: { xs: "15px", md: "0" },
              }}
            >
              Designed & Built by Esteban Tapia
            </Typography>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Link
                href="https://www.linkedin.com/in/esteban-tapia-ortiz/"
                target="_blank"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  textDecoration: "none",
                  marginRight: "3px",
                  "&:hover": { color: "rgb(237, 207, 4)" },
                }}
              >
                <LinkedInIcon fontSize="small" />
                <Typography variant="body2">LinkedIn</Typography>
              </Link>

              <Link
                href="https://github.com/estebanT96/kawaii-academy"
                target="_blank"
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  textDecoration: "none",
                  "&:hover": { color: "rgb(237, 207, 4)" },
                }}
              >
                <GitHubIcon fontSize="small" />
                <Typography variant="body2">GitHub</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
