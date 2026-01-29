import { Box } from "@mui/material";
import { useState } from "react";
import TableCard from "./TableCard";
import MobileTableCard from "./MobileTableCard";
import YoonKanaTable from "./YoonKanaTable";
import { YOON_HIRAGANA_ROWS } from "../data/filteredHiragana";
import { yoonRowHeader } from "../data/filteredKatakana";

const YoonHiraganaLearn = () => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) =>
    setActiveItem({ character: character, romaji: romaji });

  return (
    <>
      <Box display="flex" alignItems="center">
        <MobileTableCard
          char={activeItem.character}
          romaji={activeItem.romaji}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <YoonKanaTable
            onHover={handleHover}
            consonants={yoonRowHeader}
            rows={YOON_HIRAGANA_ROWS}
          />

          <TableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          />
        </Box>
      </Box>
    </>
  );
};

export default YoonHiraganaLearn;
