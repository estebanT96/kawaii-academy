import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import links from "../data/links";
import { TiThMenu } from "react-icons/ti";

const MobileNavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ display: { xs: "block", md: "none", padding: "2px 10px" } }}>
      <FormControl
        sx={{ m: 1, minWidth: "auto", bgcolor: "transparent" }}
        size="small"
      >
        <Select
          name="navigation-select"
          id="navigation-select"
          value={location.pathname}
          onChange={(e) => navigate(e.target.value)}
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <TiThMenu size={26}></TiThMenu>
            </Box>
          )}
          IconComponent={() => null}
          sx={{
            backgroundColor: "rgb(237, 207, 4)",
            boxShadow: "2px 2px 0px black",
            "& .MuiOutlinedInput-notchedOutline": { border: "1px solid black" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:active": {
              transform: "translate(1px, 1px)",
              boxShadow: "1px 1px 0px transparent ",
            },
            "& .MuiSelect-select": {
              paddingRight: "6px !important",
              paddingLeft: "6px",
              paddingTop: "6px",
              paddingBottom: "6px",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <MenuItem value="" sx={{ display: "none" }} />
          {links.map((link) => (
            <MenuItem key={link.id} value={link.path}>
              <Typography fontWeight="500" fontSize={{ xs: "14px" }}>
                {link.tag}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MobileNavLinks;
