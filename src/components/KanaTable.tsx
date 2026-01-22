import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import VowelContainer from "./ui/VowelContainer";
import KanaCell from "./KanaCell";

interface KanaChar {
  character: string;
  romaji: string;
}

interface Row {
  vowel: string;
  chars: KanaChar[];
}

interface Props {
  consonants: string[];
  rows: Row[];
  onHover: (character: string, romaji: string) => void;
}

const KanaTable = ({ consonants, rows, onHover }: Props) => {
  return (
    <Box sx={{ overflowX: { xs: "auto", md: "visible" }, width: "40%" }}>
      <Table
        size="small"
        sx={{ marginBottom: "20px", width: "auto", tableLayout: "auto" }}
      >
        <TableHead>
          <TableRow>
            {consonants.map((consonant, index) => (
              <TableCell
                key={index}
                sx={{ borderBottom: "1px solid rgb(205, 205, 205)" }}
              >
                <VowelContainer>{consonant}</VowelContainer>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.vowel}>
              <TableCell
                sx={{
                  border: "1px solid rgb(205, 205, 205)",
                }}
              >
                <VowelContainer sx={{ width: "20%" }}>
                  {row.vowel}
                </VowelContainer>
              </TableCell>
              {row.chars.map((data) => (
                <KanaCell
                  key={data.character}
                  character={data.character}
                  romaji={data.romaji}
                  onHover={onHover}
                ></KanaCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default KanaTable;
