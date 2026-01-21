import { Box, Typography } from "@mui/material";
import ScriptDescriptions from "./ScriptDescriptions";
import { descriptions } from "../data/descriptions";
import KanaTable from "./KanaTable";
import {
  SEION_KATAKANA_ROWS,
  DAKUON_KATAKANA_ROWS,
  YOON_KATAKANA_ROWS,
  seionConsonants,
  dakuonConsonants,
  yoonConsonants,
} from "../data/filteredKatakana";
import TableCard from "./TableCard";
import { useState } from "react";

const KatakanaLearnSection = () => {
  const [activeItem, setActiveItem] = useState({
    character: "ア",
    romaji: "a",
  });

  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };

  const katakanaDescriptions = descriptions.filter((desc) =>
    desc.title.includes("Katakana"),
  );

  return (
    <Box>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline", marginRight: "20px" }}
        >
         Katakana
        </Typography>
        <Typography variant="h5" color="rgb(100,100,100)">
          カタカナ
        </Typography>
      </Box>
      <ScriptDescriptions data={katakanaDescriptions} />
      <Box display="flex" justifyContent="space-between">
        <Box width="77%">
          <Box display="flex" justifyContent="space-between">
            <KanaTable
              onHover={handleHover}
              consonants={seionConsonants}
              rows={SEION_KATAKANA_ROWS}
            />
            <KanaTable
              onHover={handleHover}
              consonants={dakuonConsonants}
              rows={DAKUON_KATAKANA_ROWS}
            />
          </Box>
          <Box width="100%" display="flex" justifyContent="center"  marginBottom="50px">
            <KanaTable
              onHover={handleHover}
              consonants={yoonConsonants}
              rows={YOON_KATAKANA_ROWS}
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

export default KatakanaLearnSection;
