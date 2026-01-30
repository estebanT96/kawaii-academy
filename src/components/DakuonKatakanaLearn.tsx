import { Box } from "@mui/material";
import {
  dakuonConsonants,
  DAKUON_KATAKANA_ROWS,
} from "../data/filteredKatakana";
import { useState } from "react";
import DakuonKanaTable from "./DakuonKanaTable";
import DakuonTableCard from "./DakuonTableCard";
interface Props {
  mobileActiveHover: (character: string, romaji: string) => void;
}

const DakuonKatakanaLearn = ({ mobileActiveHover }: Props) => {
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
            mobileActiveHover={mobileActiveHover}
            onHover={handleHover}
            consonants={dakuonConsonants}
            rows={DAKUON_KATAKANA_ROWS}
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

export default DakuonKatakanaLearn;
