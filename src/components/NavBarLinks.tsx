import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import links from "../data/links";
const NavBarLinks = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            component={RouterLink}
            underline="none"
            to={link.path}
          >
            <Box>
              <Box
                padding="5px 25px"
                marginX="10px"
                borderRadius="5px"
                sx={{
                  backgroundColor: link.color,
                  transition: "all ease 200ms",
                  border: link.border,
                  boxShadow: link.boxShadow,
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.1)",
                    boxShadow: link["&:hover"],
                  },
                  "&:active": {
                    transform: "translate(1px, 1px)",
                    boxShadow: "1px 1px 0px transparent ",
                  },
                }}
              >
                <Typography color="black" fontWeight="500" fontSize="14px">
                  {link.tag}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default NavBarLinks;
