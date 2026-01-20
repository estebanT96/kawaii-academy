import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SymbolContainer from "./ui/SymbolContainer";
import VowelContainer from "./ui/VowelContainer";

interface KanaChar {
  character: string;
  romaji: string;
}

interface RowData {
  vowel: string;
  chars: KanaChar[];
}

interface Props {
  headers: string[];
  rows: RowData[];
  onHover: (character: string, romaji: string) => void;
}

const SeionHiraganaTable = ({ headers, rows, onHover }: Props) => {
  return (
    <Box width="80%">
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((headerChar, index) => (
              <TableCell key={index}>
                <VowelContainer> {headerChar}</VowelContainer>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.vowel}>
              <TableCell>
                <VowelContainer>{row.vowel}</VowelContainer>
              </TableCell>
              {row.chars.map((item, i) => (
                <TableCell
                  key={`${row.vowel}-${i}`}
                  align="center"
                  sx={{ border: "1px solid rgb(218, 218, 218)" }}
                >
                  <Box>
                    <SymbolContainer
                      onMouseEnter={() => onHover(item.character, item.romaji)}
                    >
                      <Typography variant="h4">{item.character}</Typography>
                    </SymbolContainer>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SeionHiraganaTable;
