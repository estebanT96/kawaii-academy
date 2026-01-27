import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box, Typography } from "@mui/material";
import { seionKatakanaDesc } from "../data/descriptions";
import { seionConsonants, SEION_KATAKANA_ROWS } from "../data/filteredKatakana";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@mui/system";

const SeionKatakanaLearn = () => {
  const slideLeftRight = keyframes`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(2px);
  }`;
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
          <Typography textAlign="right" marginTop="-25px">
            <ArrowRightAltIcon
              sx={{
                color: "red",
                animation: `${slideLeftRight} 700ms ease-in-out infinite alternate`,
              }}
            />
          </Typography>
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
