import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box } from "@mui/material";
import { dakuonKatakanaDesc } from "../data/descriptions";
import {
  dakuonConsonants,
  DAKUON_KATAKANA_ROWS,
} from "../data/filteredKatakana";
import { useState } from "react";
import MobileTableCard from "./MobileTableCard";

const DakuonKatakanaLearn = () => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <ScriptDescription data={[dakuonKatakanaDesc]} />
        <MobileTableCard
          char={activeItem.character}
          romaji={activeItem.romaji}
        />
      </Box>
      <Box display="flex">
        <KanaTable
          onHover={handleHover}
          consonants={dakuonConsonants}
          rows={DAKUON_KATAKANA_ROWS}
        />
        <TableCard
          character={activeItem.character}
          romaji={activeItem.romaji}
        ></TableCard>
      </Box>
    </>
  );
};

export default DakuonKatakanaLearn;
