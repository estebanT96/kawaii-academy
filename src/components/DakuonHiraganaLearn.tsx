import { Box } from "@mui/material";
import {
  dakuonConsonants,
  DAKUON_HIRAGANA_ROWS,
} from "../data/filteredHiragana";
import { useState } from "react";
import DakuonTableCard from "./DakuonTableCard";
import DakuonKanaTable from "./DakuonKanaTable";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box display="flex" width="auto">
          <DakuonKanaTable
            onHover={handleHover}
            consonants={dakuonConsonants}
            rows={DAKUON_HIRAGANA_ROWS}
          />
          <DakuonTableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          ></DakuonTableCard>
        </Box>
      </Box>
    </>
  );
};

export default DakuonHiraganaLearn;
