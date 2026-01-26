import { Box, Typography } from "@mui/material";
import WordColumn from "./WordColumn";
import {
  hiraganaTableHeader,
  hiraganaWords,
  katakanaTableHeader,
  katakanaWords,
} from "../data/words";

const WordLearnSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      padding="15px"
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        paddingTop: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "30px",
      }}
    >
      <Box display="flex">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            marginRight: "20px",
            marginBottom: "15px",
            fontSize: { xs: "20px", md: "42px" },
          }}
        >
          Word Glossary
        </Typography>
      </Box>
      <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
        Practice your hiragana and katakana reading skills with the following
        words!
      </Typography>
      <Box
        display="flex"
        width={{ xs: "auto", md: "90%" }}
        justifyContent="space-between"
        margin="0 auto"
        flexDirection={{ xs: "column", md: "row" }}
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
    </Box>
  );
};

export default WordLearnSection;
