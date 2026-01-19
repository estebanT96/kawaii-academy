import { Box, Typography } from "@mui/material";

const Furigana = () => {
  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", marginRight: "20px" }}
      >
        Furigana
      </Typography>
      <Typography variant="h5" color="rgb(100,100,100)">
        ふりがな　（振り仮名）
      </Typography>
    </Box>
  );
};

export default Furigana;
