import { Box, Typography } from "@mui/material";
import ScriptDescriptions from "./ScriptDescriptions";
import { descriptions } from "../data/descriptions";
import KanaTable from "./KanaTable";
import {
  SEION_HIRAGANA_ROWS,
  DAKUON_HIRAGANA_ROWS,
  YOON_HIRAGANA_ROWS,
  seionConsonants,
  dakuonConsonants,
  yoonConsonants,
} from "../data/filteredHiragana";

const HiraganaLearnSection = () => {
  const hiraganaDescriptions = descriptions.filter((desc) =>
    desc.title.includes("Hiragana"),
  );


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
      <ScriptDescriptions data={hiraganaDescriptions} />
      <Box display="flex" justifyContent="space-between" width="80%">
        <KanaTable consonants={seionConsonants} rows={SEION_HIRAGANA_ROWS} />
        <KanaTable consonants={dakuonConsonants} rows={DAKUON_HIRAGANA_ROWS} />
      </Box>
      <Box width="80%" display="flex" justifyContent="center">
        <KanaTable consonants={yoonConsonants} rows={YOON_HIRAGANA_ROWS} />
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
