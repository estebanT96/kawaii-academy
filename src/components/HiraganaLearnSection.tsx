import { Box, Typography } from "@mui/material";
import ScriptDescriptions from "./ScriptDescriptions";
import { descriptions } from "../data/descriptions";
import KanaTable from "./KanaTable";
import {
  SEION_HIRAGANA_ROWS,
  DAKUON_HIRAGANA_ROWS,
  YOON_HIRAGANA_ROWS,
  seionConsonants,
  dakuonConsonants,
  yoonConsonants,
} from "../data/filteredHiragana";
import TableCard from "./TableCard";
import { useState } from "react";

const HiraganaLearnSection = () => {
  const [activeItem, setActiveItem] = useState({
    character: "あ",
    romaji: "a",
  });

  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };

  const hiraganaDescriptions = descriptions.filter((desc) =>
    desc.title.includes("Hiragana"),
  );

  return (
    <Box>
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
      <Box display="flex" justifyContent="space-between">
        <Box width="77%">
          <Box display="flex" justifyContent="space-between">
            <KanaTable
              onHover={handleHover}
              consonants={seionConsonants}
              rows={SEION_HIRAGANA_ROWS}
            />
            <KanaTable
              onHover={handleHover}
              consonants={dakuonConsonants}
              rows={DAKUON_HIRAGANA_ROWS}
            />
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <KanaTable
              onHover={handleHover}
              consonants={yoonConsonants}
              rows={YOON_HIRAGANA_ROWS}
            />
          </Box>
        </Box>
        <Box width="20%" display="flex" justifyContent="center">
          <TableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          ></TableCard>
        </Box>
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
