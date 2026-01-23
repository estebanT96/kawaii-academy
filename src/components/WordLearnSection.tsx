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
      }}
    >
      <Box display="flex" alignItems="baseline" marginBottom="20px">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            marginRight: "20px",
            marginBottom: "15px",
            fontSize: { xs: "24px", md: "48px" },
          }}
        >
          Word Glossary
        </Typography>
      </Box>
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
