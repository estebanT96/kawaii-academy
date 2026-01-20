import { TableCell, TableRow, Typography } from "@mui/material";
import SymbolContainer from "./ui/SymbolContainer";

interface KanaData {
  character: string;
  romaji: string;
}

interface Props {
  vowel: string;
  rowCharacters: KanaData[];
  onHover: (character: string, romaji: string) => void;
}

const HiraganaRow = ({ vowel, rowCharacters, onHover }: Props) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          borderLeft: "1px solid rgb(222, 222, 222)",

          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="rgb(0, 104, 215)">
          {vowel}
        </Typography>
      </TableCell>

      {rowCharacters.map((item) => (
        <TableCell
          sx={{ border: "1px solid rgb(235, 235, 235)" }}
          key={item.character}
        >
          <SymbolContainer
            onMouseEnter={() => onHover(item.character, item.romaji)}
          >
            <Typography variant="h4">{item.character}</Typography>
          </SymbolContainer>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default HiraganaRow;
