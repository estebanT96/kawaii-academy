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
}

const KanaTable = ({ consonants, rows }: Props) => {
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
              <VowelContainer>{row.vowel}</VowelContainer>
            </TableCell>
            {row.chars.map((data, i) => (
              <TableCell
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all ease 150ms",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#dedede",
                    color: "rgb(255, 97, 35)",
                    cursor: "pointer",
                  },
                }}
                onMouseEnter={() => console.log(data.character)}
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
