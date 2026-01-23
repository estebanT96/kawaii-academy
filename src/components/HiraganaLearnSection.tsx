import { Box, Typography } from "@mui/material";
import { YOON_HIRAGANA_ROWS, yoonRowHeader } from "../data/filteredHiragana";

import YoonHiraganaLearn from "./YoonHiraganaLearn";

import DakuonHiraganaLearn from "./DakuonHiraganaLearn";

const HiraganaLearnSection = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="baseline"
        width="100%"
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
          sx={{ fontSize: { xs: "18px", md: "24px" } }}
        >
          ひらがな
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box width="100%">
          {/* <SeionHiraganaLearn /> */}
          <Box display="flex" justifyContent="flex-start" width="">
            <Typography
              display={{ xs: "block", sm: "none" }}
              fontSize="12px"
              fontWeight="500"
              color="rgb(142, 142, 142)"
            >
              [scroll horizontally]
            </Typography>
          </Box>
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
