import { Box, Typography } from "@mui/material";
import WordColumn from "./WordColumn";
import {
  hiraganaTableHeader,
  hiraganaWords,
  katakanaTableHeader,
  katakanaWords,
} from "../data/words";
import WordCard from "./WordCard";
import { useState } from "react";
const WordLearnSection = () => {
  const [activeWord, setActiveWord] = useState({
    kanaWord: "",
    romaji: "",
  });

  const handleHover = (kanaWord: string, romaji: string) => {
    setActiveWord({ kanaWord: kanaWord, romaji: romaji });
  };

  return (
    <Box display="flex" flexDirection="column" position="relative">
      <Box display="flex" alignItems="baseline" marginBottom="20px">
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline", marginRight: "20px" }}
        >
          Word Glossary
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="stretch">
        <Box display="flex" width="60%" justifyContent="space-between">
          <WordColumn
            headers={[hiraganaTableHeader]}
            words={hiraganaWords}
            onHover={handleHover}
          ></WordColumn>
          <WordColumn
            headers={[katakanaTableHeader]}
            words={katakanaWords}
            onHover={handleHover}
          ></WordColumn>
        </Box>
        <WordCard words={[activeWord]} />
      </Box>
    </Box>
  );
};

export default WordLearnSection;
