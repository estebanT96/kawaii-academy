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
  rowSyllable: string;
  chars: KanaChar[];
}

interface Props {
  consonants: string[];
  rows: Row[];
  onHover: (character: string, romaji: string) => void;
}

const YoonKanaTable = ({ consonants, rows, onHover }: Props) => {
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "80%" } }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {consonants.map((item) => (
                <TableCell
                  align="center"
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
                  <KanaCell
                    key={data.character}
                    character={data.character}
                    romaji={data.romaji}
                    onHover={onHover}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default YoonKanaTable;
