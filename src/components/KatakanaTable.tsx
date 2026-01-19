import { Box, Typography } from "@mui/material";
import React from "react";

const KatakanaTable = () => {
  return (
    <Box display="flex" alignItems="baseline">
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", marginRight: "20px" }}
      >
        Katakana
      </Typography>
      <Typography variant="h5" color="rgb(100,100,100)">
        カタカナ
      </Typography>
    </Box>
  );
};

export default KatakanaTable;
