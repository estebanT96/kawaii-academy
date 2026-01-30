import { Box, Typography } from "@mui/material";
import WordColumn from "./WordColumn";
import {
  hiraganaTableHeader,
  hiraganaWords,
  katakanaTableHeader,
  katakanaWords,
} from "../data/words";
import GiveItAShot from "./GiveItAShot";

const WordLearnSection = () => {
  return (
    <Box
      marginTop="30px"
      display="flex"
      flexDirection="column"
      position="relative"
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <Box marginBottom="10px">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            fontSize: { xs: "20px", md: "42px" },
          }}
        >
          Word Glossary
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "12px", md: "14px" }, paddingTop: "10px" }}
        >
          Practice your hiragana and katakana reading skills with the following
          words.
        </Typography>
      </Box>
      <Box
        display="flex"
        width={{ xs: "auto", sm: "80%", md: "100%" }}
        justifyContent="space-between"
        margin="0 auto"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <WordColumn
          headers={[hiraganaTableHeader]}
          words={hiraganaWords}
        ></WordColumn>
        <WordColumn
          headers={[katakanaTableHeader]}
          words={katakanaWords}
        ></WordColumn>
      </Box>
      <GiveItAShot />
    </Box>
  );
};

export default WordLearnSection;
