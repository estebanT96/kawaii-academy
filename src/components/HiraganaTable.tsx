import {
  Box,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import hiraganatable from "../assets/Screenshot 2026-01-18 at 12.59.52 PM.png";
import type { KanaChar } from "../data/kana";

interface Props {
  data: KanaChar[];
}

const HiraganaTable = ({ data }: Props) => {
  //Exclude yoon hiragana type characters
  const normalHiragana = data.filter((item) => item.type !== "yoon-hiragana");

  //Created new array of non-repeated one syllable hiragana characters
  const normalHiraganaRows = [
    ...new Set(normalHiragana.map((item) => item.row)),
  ];
  console.log(normalHiraganaRows);

  //Only yoon hiragana characters
  const yoonHiragana = data.filter((item) => item.type === "yoon-hiragana");

  //Created new array of non-repeated yoon hiragana characters
  const yoonHiraganaRows = [...new Set(yoonHiragana.map((item) => item.row))];
  console.log(yoonHiraganaRows);

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
      </Table>
    </>
  );
};

export default HiraganaTable;
