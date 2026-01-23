import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import links from "../data/links";
const NavBarLinks = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        width="15%"
        paddingRight={5}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            component={RouterLink}
            underline="hover"
            to={link.path}
          >
            <Typography color="rgb(9, 134, 218)" fontWeight="600">
              {link.tag}
            </Typography>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default NavBarLinks;
