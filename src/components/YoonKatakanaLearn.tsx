import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import VowelContainer from "./ui/VowelContainer";
import YoonCell from "./YoonCell";
import { useState } from "react";
import TableCard from "./TableCard";
import ScriptDescription from "./ScriptDescription";
import { yoonKatakanaDesc } from "../data/descriptions";
import MobileTableCard from "./MobileTableCard";

interface KanaChar {
  character: string;
  romaji: string;
  row: string;
}

interface Row {
  rowSyllable: string;
  chars: KanaChar[];
}

interface Props {
  rowHeader: string[];
  rows: Row[];
}

const YoonKatakanaLearn = ({ rowHeader, rows }: Props) => {
  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });
  const handleHover = (character: string, romaji: string) =>
    setActiveItem({ character: character, romaji: romaji });

  return (
    <Box display="flex" flexDirection="column">
         <Box display="flex" alignItems="center">
        <ScriptDescription data={[yoonKatakanaDesc]} />
        <MobileTableCard
          char={activeItem.character}
          romaji={activeItem.romaji}
        />
      </Box>
      <Box display="flex">
        <Table
          size="small"
          sx={{ marginBottom: "20px", width: "auto", tableLayout: "auto" }}
        >
          <TableHead>
            <TableRow>
              {rowHeader.map((item) => (
                <TableCell
                  key={item}
                  sx={{
                    borderBottom: "2px solid rgb(205, 205, 205)",
                    fontSize: { xs: "16px", md: "20px" },
                    color: "rgb(62, 110, 255)",
                  }}
                >
                  <VowelContainer>{item}</VowelContainer>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rowSyllable}>
                <TableCell
                  sx={{
                    borderBottom: "2px solid rgb(236, 236, 236)",
                    fontSize: { xs: "16px", md: "20px" },
                    color: "rgb(255, 63, 63)",
                  }}
                >
                  <VowelContainer>{row.rowSyllable}</VowelContainer>
                </TableCell>
                {row.chars.map((data) => (
                  <YoonCell
                    key={data.character}
                    character={data.character}
                    romaji={data.romaji}
                    onHover={handleHover}
                  ></YoonCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableCard
          character={activeItem.character}
          romaji={activeItem.romaji}
        />
      </Box>
    </Box>
  );
};

export default YoonKatakanaLearn;
