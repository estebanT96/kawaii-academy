import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HiraganaRow from "./HiraganaRow";
import {
  seionHiraganaA,
  seionHiraganaI,
  seionHiraganaU,
  seionHiraganaE,
  seionHiraganaO,
} from "../data/filteredHiragana";
import TableCard from "./TableCard";
const HiraganaTable = () => {
  const consonants = ["", "", "k", "s", "t", "n", "h", "m", "y", "r", "w", "n"];

  return (
    <>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          sx={{ textDecoration: "underline", marginRight: "20px" }}
        >
          Hiragana
        </Typography>
        <Typography variant="h5" color="rgb(100,100,100)">
          ひらがな （平仮名）
        </Typography>
      </Box>
      <Box display='flex' >
        <Table sx={{ width: "80%" }}>
          <TableHead>
            <TableRow>
              {consonants.map((consonant) => (
                <TableCell key={consonant}>
                  <Typography
                    color="rgb(0, 104, 215)"
                    paddingLeft="20px"
                    variant="h4"
                  >
                    {consonant}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <HiraganaRow vowel="a" rowCharacters={seionHiraganaA} />
            <HiraganaRow vowel="i" rowCharacters={seionHiraganaI} />
            <HiraganaRow vowel="u" rowCharacters={seionHiraganaU} />
            <HiraganaRow vowel="e" rowCharacters={seionHiraganaE} />
            <HiraganaRow vowel="o" rowCharacters={seionHiraganaO} />
          </TableBody>
        </Table>
        <TableCard></TableCard>
      </Box>
    </>
  );
};

export default HiraganaTable;
