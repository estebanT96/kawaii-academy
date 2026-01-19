import { TableCell, TableRow, Typography } from "@mui/material";
import SymbolContainer from "./SymbolContainer";

interface Props {
  vowel: string;
  rowCharacters: string[];
}

const HiraganaRow = ({ vowel, rowCharacters }: Props) => {
  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            borderRight: "1px solid rgb(222, 222, 222)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="rgb(0, 104, 215)">
            {vowel}
          </Typography>
        </TableCell>

        {rowCharacters.map((character) => (
          <TableCell
            sx={{ borderRight: "1px solid rgb(235, 235, 235)" }}
            key={character}
          >
            <SymbolContainer>
              <Typography variant="h4">{character}</Typography>
            </SymbolContainer>
          </TableCell>
        ))}
      </TableRow>
    </>
  );
};

export default HiraganaRow;
