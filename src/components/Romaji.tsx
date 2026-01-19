import { Box, Typography } from "@mui/material";

const Romaji = () => {
  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", marginRight: "20px" }}
      >
        Romaji
      </Typography>
    </Box>
  );
};

export default Romaji;
