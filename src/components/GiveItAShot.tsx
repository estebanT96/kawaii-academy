import { Box, Link, Typography } from "@mui/material";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

const GiveItAShot = () => {
  return (
    <Box width="100%">
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            marginRight: { xs: "0", md: "10px" },
          }}
        >
          Ready to test what you learned? Give it a shot!{" "}
        </Typography>{" "}
        <Link
          underline="none"
          component={RouterLink}
          key={links[1].id}
          to={links[1].path}
        >
          <Box
            padding="2px 5px"
            borderRadius="5px"
            sx={{
              backgroundColor: links[1].color,
              transition: "all ease 200ms",
              border: links[1].border,
              boxShadow: links[1].boxShadow,
              "&:hover": {
                cursor: "pointer",
                filter: "brightness(1.1)",
                boxShadow: links[1]["&:hover"],
              },
              "&:active": {
                transform: "translate(1px, 1px)",
                boxShadow: "1px 1px 0px transparent ",
              },
            }}
          >
            <Typography color="black" fontWeight="500" fontSize="12px">
              {links[1].tag}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default GiveItAShot;
