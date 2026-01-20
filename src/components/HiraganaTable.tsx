import { Box, Table, TableBody, TableHead, Typography } from "@mui/material";
import TableCard from "./TableCard";
import ConsonantsRow from "./ConsonantsRow";
import NormalHiraganaRows from "./NormalHiraganaRows";
import { useState } from "react";
import ScriptDescriptions from "./ScriptDescriptions";
import { descriptions } from "../data/descriptions";
const HiraganaTable = () => {
  const [activeItem, setActiveItem] = useState({
    character: "あ",
    romaji: "a",
  });

  const handleHover = (character: string, romaji: string) => {
    setActiveItem({ character, romaji });
  };

  const hiraganaDescriptions = descriptions.filter((desc) =>
    desc.title.includes("Hiragana"),
  );

  return (
    <>
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
      <Box display="flex" flexDirection="column">
        <ScriptDescriptions data={hiraganaDescriptions} />
        <Box display="flex">
          <Table sx={{ width: "85%" }}>
            <TableHead>
              <ConsonantsRow />
            </TableHead>
            <TableBody>
              <NormalHiraganaRows onHover={handleHover} />
            </TableBody>
          </Table>
          <TableCard
            character={activeItem.character}
            romaji={activeItem.romaji}
          ></TableCard>
        </Box>
      </Box>
    </>
  );
};

export default HiraganaTable;
