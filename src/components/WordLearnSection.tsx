import { Box, Typography } from "@mui/material";
import WordColumn from "./WordColumn";
import { hiraganaTableHeader, hiraganaWords, katakanaTableHeader, katakanaWords } from "../data/words";
const WordLearnSection = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="baseline" marginBottom="20px">
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline", marginRight: "20px" }}
        >
          Word Glossary
        </Typography>
      </Box>
      <Box display="flex" width="60%" justifyContent="space-between">
        <WordColumn headers={[hiraganaTableHeader]} words={hiraganaWords}></WordColumn>
        <WordColumn headers={[katakanaTableHeader]} words={katakanaWords}></WordColumn>
      </Box>
    </Box>
  );
};

export default WordLearnSection;
