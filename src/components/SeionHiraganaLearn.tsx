import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box } from "@mui/material";
import { seionHiraganaDesc } from "../data/descriptions";
import { seionConsonants, SEION_HIRAGANA_ROWS } from "../data/filteredHiragana";
import { useState } from "react";

const SeionHiraganaLearn = () => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };
  return (
    <>
      <ScriptDescription data={[seionHiraganaDesc]} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box>
          <KanaTable
            onHover={handleHover}
            consonants={seionConsonants}
            rows={SEION_HIRAGANA_ROWS}
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

export default SeionHiraganaLearn;
