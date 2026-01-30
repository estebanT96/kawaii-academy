import { Box } from "@mui/material";
import { useState } from "react";
import TableCard from "./TableCard";
import YoonKanaTable from "./YoonKanaTable";
import { YOON_KATAKANA_ROWS } from "../data/filteredKatakana";
import { yoonRowHeader } from "../data/filteredKatakana";

interface Props {
  mobileActiveHover: (character: string, romaji: string) => void;
}
const YoonKatakanaLearn = ({ mobileActiveHover }: Props) => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) =>
    setActiveItem({ character: character, romaji: romaji });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box display="flex" justifyContent="space-between" width="100%">
        <YoonKanaTable
          mobileActiveHover={mobileActiveHover}
          onHover={handleHover}
          consonants={yoonRowHeader}
          rows={YOON_KATAKANA_ROWS}
        />

        <TableCard
          character={activeItem.character}
          romaji={activeItem.romaji}
        />
      </Box>
    </Box>
  );
};

export default YoonKatakanaLearn;
