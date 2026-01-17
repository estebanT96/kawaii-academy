import { Box } from "@mui/material";
import logo from '../assets/kitsuneBlueHachimakiface.jpeg'
import logoLetters from '../assets/kitsuneBlueHachimakiletters.jpeg'

const NavBar = () => {
  return (
    <Box sx={{ height: "46px", borderRadius: "5px" }}>
      <img src={logo} alt="" height="100%" />
      <img src={logoLetters} alt="" height="100%" />
    </Box>
  );
};

export default NavBar;
