import { Box, Typography } from "@mui/material";
import { YOON_HIRAGANA_ROWS, yoonRowHeader } from "../data/filteredHiragana";

import YoonHiraganaLearn from "./YoonHiraganaLearn";

import DakuonHiraganaLearn from "./DakuonHiraganaLearn";
import SeionHiraganaLearn from "./SeionHiraganaLearn";

const HiraganaLearnSection = () => {
  return (
    <Box
      sx={{
        background: "rgb(255, 255, 255)", //color de fondo
        padding: "15px",
      }}
    >
      <Box
        display="flex"
        alignItems="baseline"
        width="100%"
        top="0"
        sx={{
          justifyContent: { xs: "flex-start" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            marginRight: "20px",
            marginBottom: "15px",
            fontSize: { xs: "24px", md: "48px" },
          }}
        >
          Hiragana
        </Typography>
        <Typography
          variant="h5"
          color="rgb(100,100,100)"
          sx={{ fontSize: { xs: "14px", md: "24px" } }}
        >
          ひらがな
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box width="100%">
          <SeionHiraganaLearn />
          
          <DakuonHiraganaLearn />
          <Box>
            <Typography> </Typography>
          </Box>
          <YoonHiraganaLearn
            rowHeader={yoonRowHeader}
            rows={YOON_HIRAGANA_ROWS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
