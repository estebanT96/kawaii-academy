import ScriptDescription from "./ScriptDescription";
import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box, Typography } from "@mui/material";
import { seionHiraganaDesc } from "../data/descriptions";
import { seionConsonants, SEION_HIRAGANA_ROWS } from "../data/filteredHiragana";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@mui/system";

const SeionHiraganaLearn = () => {
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
      <ScriptDescription data={[seionHiraganaDesc]} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box width="100%">
          <KanaTable
            onHover={handleHover}
            consonants={seionConsonants}
            rows={SEION_HIRAGANA_ROWS}
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

export default SeionHiraganaLearn;
