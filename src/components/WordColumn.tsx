import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Word {
  wordInKana: string;
  type: string;
  wordInRomaji: string;
}

interface Header {
  type: string;
  romaji: string;
}

interface Props {
  headers: Header[];
  words: Word[];
}

const WordColumn = ({ headers, words }: Props) => {
  return (
    <Table size="small" sx={{ width: "auto", maxWidth: "600px" }}>
      <TableHead>
        {headers.map((header) => (
          <TableRow key={header.romaji}>
            <TableCell
              sx={{
                padding: "5px 0",
              }}
            >
              <Typography variant="h5">{header.type}</Typography>
            </TableCell>
            <TableCell
              sx={{
                padding: "0px",
              }}
            >
              <Typography variant="h5">{header.romaji}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {words.map((word) => (
          <TableRow key={word.wordInRomaji}>
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
                "&:hover + td .romaji-text": {
                  color: "#0067d6",
                  fontWeight: "500",
                },
              }}
            >
              <Typography variant="h5">{word.wordInKana}</Typography>
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid rgb(224, 224, 224)",
                fontFamily: "'Poppins', sans-serif",
                transition: "all ease 150ms",
                paddingLeft: "10px",
              }}
            >
              <Typography
                className="romaji-text"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "18px",
                  transition: "all ease 200ms",
                  color: "rgb(163, 163, 163)",
                  fontWeight: "500",
                }}
              >
                {word.wordInRomaji}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WordColumn;
