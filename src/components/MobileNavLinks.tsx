import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import links from "../data/links";
import { TiThMenu } from "react-icons/ti";

const MobileNavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ display: { xs: "block", md: "none" }, paddingRight: 2 }}>
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
              <TiThMenu size={24} color="white"></TiThMenu>
            </Box>
          )}
          IconComponent={() => null}
          size="small"
          sx={{
            color: "white",
            backgroundColor: "rgb(19, 139, 194)",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-select": {
              paddingRight: "8px !important",
              paddingLeft: "8px",
              paddingTop: "8px",
              paddingBottom: "8px",
              display: "flex",
              alignItems: "center",
            },
          }}
          MenuProps={{
            MenuListProps: {
              sx: {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          }}
        >
          <MenuItem value="" sx={{display:"none"}}/>
          {links.map((link) => (
            <MenuItem key={link.id} value={link.path}>
              <Typography fontWeight="500" fontSize={{xs:"14px"}}>{link.tag}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MobileNavLinks;
