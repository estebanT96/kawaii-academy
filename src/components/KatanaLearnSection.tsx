import { Box, Typography } from "@mui/material";
import { YOON_KATAKANA_ROWS, yoonRowHeader } from "../data/filteredKatakana";

import YoonKatakanaLearn from "./YoonKatakanaLearn";
import DakuonKatakanaLearn from "./DakuonKatakanaLearn";
import SeionKatakanaLearn from "./SeionKatakanaLearn";
const HiraganaLearnSection = () => {
  return (
    <Box sx={{backgroundColor:"rgba(255, 214, 8, 0.11)", padding:"15px"}}>
      <Box
        display="flex"
        alignItems="baseline"
        width="auto"
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
          Katakana
        </Typography>
        <Typography
          variant="h5"
          color="rgb(100,100,100)"
          sx={{ fontSize: { xs: "18px", md: "24px" } }}
        >
          カタカナ
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" width="100%">
        <Box>
          <SeionKatakanaLearn />
          <Typography
            marginTop="2px"
            fontSize="10px"
            fontWeight="600"
            color="rgb(255, 106, 106)"
            display={{ xs: "block", md: "none" }}
          >
            [scroll horizontally]
          </Typography>
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
