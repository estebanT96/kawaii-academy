import { Box, Container, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/logoFace.png";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4797ed",
        color: "white",
        marginTop: "auto",
        paddingY: { xs: "15px", md: "20px" },
        height: "auto",
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
                    fontSize: "16px",
                    marginBottom: "-7px",
                  }}
                >
                  Kawaii Academy
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Learn Japanese the fun way.
                </Typography>
              </Box>
            </Box>
          </Link>
          <Box>
            <Typography
              variant="caption"
              display="block"
              sx={{ color: "rgb(232, 232, 232)" }}
            >
              © 2026 Kawaii Academy. All rights reserved.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="caption"
              sx={{ fontSize: "10px", color: "rgb(232, 232, 232)" }}
            >
              Music from #Uppbeat (free for Creators!):
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: "10px", color: "rgb(232, 232, 232)" }}
            >
              <Link
                href="https://uppbeat.io/t/pecan-pie/boogie"
                target="_blank"
                rel="noopener"
                sx={{
                  ml: 1,
                  color: "rgb(232, 232, 232)",
                  textDecoration: "none",
                }}
              >
                https://uppbeat.io/t/pecan-pie/boogie
              </Link>
              <br />
              License code: **ZZAOYODV5BDGZBFS**
            </Typography>
          </Box>
          <Box textAlign={{ xs: "center", md: "right" }}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                marginBottom: "3px",
                fontSize: { xs: "10px", md: "14px" },
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
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "10px", md: "14px" } }}
                >
                  LinkedIn
                </Typography>
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
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "10px", md: "14px" } }}
                >
                  GitHub
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
