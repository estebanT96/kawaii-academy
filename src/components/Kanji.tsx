import { Box, Typography } from "@mui/material";

const Kanji = () => {
  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", marginRight: "20px" }}
      >
        Kanji
      </Typography>
      <Typography variant="h5" color="rgb(100,100,100)">
        漢字
      </Typography>
    </Box>
  );
};

export default Kanji;
