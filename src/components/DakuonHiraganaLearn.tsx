import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box } from "@mui/material";
import { dakuonHiraganaDesc } from "../data/descriptions";
import {
  dakuonConsonants,
  DAKUON_HIRAGANA_ROWS,
} from "../data/filteredHiragana";
import { useState } from "react";
import MobileTableCard from "./MobileTableCard";

const DakuonHiraganaLearn = () => {
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
        <ScriptDescription data={[dakuonHiraganaDesc]} />
        <MobileTableCard char={activeItem.character} romaji={activeItem.romaji} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <KanaTable
            onHover={handleHover}
            consonants={dakuonConsonants}
            rows={DAKUON_HIRAGANA_ROWS}
          />
          <TableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          ></TableCard>
        </Box>
      </Box>
    </>
  );
};

export default DakuonHiraganaLearn;
