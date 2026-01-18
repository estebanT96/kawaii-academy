import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import links from "../data/links";

const MobileNavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ display: { xs: "block", md: "none" }, paddingRight: 2 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          name="navigation-select"
          id="navigation-select"
          value={location.pathname}
          onChange={(e) => navigate(e.target.value)}
          size="small"
          sx={{
            color: "rgb(240, 78, 28)",
            "& .MuiOutlinedInput-notchedOutline": {},
            "&:hover .MuiOutlinedInput-notchedOutline": {},
            minWidth: 120,
            backgroundColor: "white",
          }}
        >
          <MenuItem value="" />
          {links.map((link) => (
            <MenuItem key={link.id} value={link.path}>
              {link.tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MobileNavLinks;
