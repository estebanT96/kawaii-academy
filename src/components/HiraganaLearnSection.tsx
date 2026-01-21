import { Box, Typography } from "@mui/material";
import { YOON_HIRAGANA_ROWS, yoonRowHeader } from "../data/filteredHiragana";

import YoonHiraganaLearn from "./YoonHiraganaLearn";
import SeionHiraganaLearn from "./SeionHiraganaLearn";
import DakuonHiraganaLearn from "./DakuonHiraganaLearn";
const HiraganaLearnSection = () => {
  return (
    <Box>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline", marginRight: "20px" }}
        >
          Hiragana
        </Typography>
        <Typography variant="h5" color="rgb(100,100,100)">
          ひらがな （平仮名）
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box>
          <SeionHiraganaLearn />
          <DakuonHiraganaLearn />
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
