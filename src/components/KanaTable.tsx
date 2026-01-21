import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VowelContainer from "./ui/VowelContainer";

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
    <Table
      size="small"
      sx={{ marginBottom: "20px", width: "auto", tableLayout: "auto" }}
    >
      <TableHead>
        <TableRow>
          {consonants.map((consonant, i) => (
            <TableCell
              key={i}
              sx={{ borderBottom: "1px solid rgb(205, 205, 205)" }}
            >
              <VowelContainer>{consonant}</VowelContainer>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            <TableCell
              sx={{
                border: "1px solid rgb(205, 205, 205)",
              }}
            >
              <VowelContainer sx={{ width: "20%" }}>{row.vowel}</VowelContainer>
            </TableCell>
            {row.chars.map((data, i) => (
              <TableCell
                sx={{
                  border: "1px solid rgb(224, 224, 224)",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all ease 150ms",
                  "&:hover": {
                    backgroundColor: "#dedede",
                    color: "rgb(255, 97, 35)",
                    cursor: "pointer",
                  },
                }}
                onMouseEnter={() => onHover(data.character, data.romaji)}
                key={i}
              >
                <Typography variant="h5">{data.character}</Typography>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default KanaTable;
