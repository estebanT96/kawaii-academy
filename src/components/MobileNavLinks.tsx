import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import links from "../data/links";
import { TiThMenu } from "react-icons/ti";

const MobileNavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{ display: { xs: "block", md: "none", padding: "10px 22px" } }}
      borderRight="2px solid black"
    >
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
              <TiThMenu size={32} color="white"></TiThMenu>
            </Box>
          )}
          IconComponent={() => null}
          sx={{
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-select": {
              paddingRight: "4px !important",
              paddingLeft: "4px",
              paddingTop: "4px",
              paddingBottom: "4px",
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
