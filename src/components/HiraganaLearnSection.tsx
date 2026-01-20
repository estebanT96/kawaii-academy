import { Box, Typography } from "@mui/material";
import ScriptDescriptions from "./ScriptDescriptions";
import { descriptions } from "../data/descriptions";
import KanaTable from "./KanaTable";
import { seionConsonants, SEION_HIRAGANA_ROWS } from "../data/filteredHiragana";
import CharacterCard from "./CharacterCard";
import { useState } from "react";

const HiraganaLearnSection = () => {
  const [activeItem, setActiveItem] = useState({ char: "あ", romaji: "a" });

  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ char: character, romaji: romaji });
  };

  const hiraganaDescriptions = descriptions.filter((desc) =>
    desc.title.includes("Hiragana"),
  );

  return (
    <>
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
      <Box display="flex">
        <KanaTable
          headers={seionConsonants}
          rows={SEION_HIRAGANA_ROWS}
          onHover={handleHover}
        />
        <CharacterCard char={activeItem.char} romaji={activeItem.romaji} />
      </Box>
    </>
  );
};

export default HiraganaLearnSection;
