import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box } from "@mui/material";
import { seionKatakanaDesc } from "../data/descriptions";
import { seionConsonants, SEION_KATAKANA_ROWS } from "../data/filteredKatakana";
import { useState } from "react";

const SeionKatakanaLearn = () => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };
  return (
    <>
      <ScriptDescription data={[seionKatakanaDesc]} />
      <Box display="flex">
        <Box>
          <KanaTable
            onHover={handleHover}
            consonants={seionConsonants}
            rows={SEION_KATAKANA_ROWS}
          />
        </Box>
        <TableCard
          character={activeItem.character}
          romaji={activeItem.romaji}
        ></TableCard>
      </Box>
    </>
  );
};

export default SeionKatakanaLearn;
