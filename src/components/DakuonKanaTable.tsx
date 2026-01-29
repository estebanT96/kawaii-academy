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
    <Box
      sx={{
        overflowX: { xs: "auto", md: "visible" },
        marginBottom: "25px",
        width: { xs: "100%", md: "75%" },
      }}
    >
      <Table size="small" sx={{ width: "100%", tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            {consonants.map((consonant, index) => (
              <TableCell
                align="center"
                key={index}
                sx={{
                  borderBottom: "2px solid rgb(205, 205, 205)",
                  fontSize: { xs: "16px", md: "20px" },
                  color: "rgb(62, 110, 255)",
                }}
              >
                <VowelContainer sx={{ fontSize: { xs: "16px", md: "20px" } }}>
                  {consonant}
                </VowelContainer>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.vowel}>
              <TableCell
                sx={{
                  borderBottom: "2px solid rgb(236, 236, 236)",
                  align: "center",
                  fontSize: { xs: "16px", md: "20px" },
                  color: "rgb(255, 63, 63)",
                }}
              >
                <VowelContainer sx={{ fontSize: { xs: "16px", md: "20px" } }}>
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
