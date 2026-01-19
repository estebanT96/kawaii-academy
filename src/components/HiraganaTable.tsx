import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { KanaChar } from "../data/kana";

interface Props {
  data: KanaChar[];
}

const HiraganaTable = ({ data }: Props) => {
  const seionHiraganaA = data
    .filter((item) => item.type === "seion-hiragana" && item.row === "a")
    .map((character) => character.char);
  console.log(seionHiraganaA);

  const seionHiraganaI = data
    .filter((item) => item.type === "seion-hiragana" && item.row === "i")
    .map((character) => character.char);
  console.log(seionHiraganaI);

  const seionHiraganaU = data
    .filter((item) => item.type === "seion-hiragana" && item.row === "u")
    .map((character) => character.char);
  console.log(seionHiraganaU);

  const seionHiraganaE = data
    .filter((item) => item.type === "seion-hiragana" && item.row === "e")
    .map((character) => character.char);
  console.log(seionHiraganaE);

  const seionHiraganaO = data
    .filter((item) => item.type === "seion-hiragana" && item.row === "o")
    .map((character) => character.char);
  console.log(seionHiraganaO);

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
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </>
  );
};

export default HiraganaTable;
