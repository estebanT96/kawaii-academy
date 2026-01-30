import KanaTable from "./KanaTable";
import TableCard from "./TableCard";
import { Box, Typography } from "@mui/material";
import { seionConsonants, SEION_KATAKANA_ROWS } from "../data/filteredKatakana";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@mui/system";

interface Props {
  mobileActiveHover: (character: string, romaji: string) => void;
}

const SeionKatakanaLearn = ({ mobileActiveHover }: Props) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <KanaTable
            mobileActiveHover={mobileActiveHover}
            onHover={handleHover}
            consonants={seionConsonants}
            rows={SEION_KATAKANA_ROWS}
          />
          <TableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          ></TableCard>
        </Box>
        <Box
          sx={{ display: { xs: "flex", sm: "none" }, marginTop: "-25px" }}
          justifyContent="flex-end"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgb(255, 88, 88)",
              fontWeight: "600",
            }}
            fontSize="12px"
          >
            [scroll]
            <ArrowRightAltIcon
              sx={{
                animation: `${slideLeftRight} 700ms ease-in-out infinite alternate`,
              }}
            />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SeionKatakanaLearn;
