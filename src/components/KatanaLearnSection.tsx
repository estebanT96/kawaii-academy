import { Box, Typography } from "@mui/material";
import { YOON_KATAKANA_ROWS, yoonRowHeader } from "../data/filteredKatakana";

import YoonKatakanaLearn from "./YoonKatakanaLearn";
import DakuonKatakanaLearn from "./DakuonKatakanaLearn";
import SeionKatakanaLearn from "./SeionKatakanaLearn";
const HiraganaLearnSection = () => {
  return (
    <Box>
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

      <Box display="flex" justifyContent="space-between">
        <Box>
          <SeionKatakanaLearn />
          <DakuonKatakanaLearn />
          <YoonKatakanaLearn
            rowHeader={yoonRowHeader}
            rows={YOON_KATAKANA_ROWS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
