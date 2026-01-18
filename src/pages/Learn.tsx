import {
  Box,
  Card,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import LearnContainer from "../components/LearnContainer";
import hiraganatable from "../assets/Screenshot 2026-01-18 at 12.59.52 PM.png";
const Learn = () => {
  return (
    <LearnContainer>
      <Card sx={{ padding: "15px", maxWidth: "1400px", margin: "0 auto" }}>
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
        <Table size="small" sx={{ maxWidth: 1100 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <h1>Seion</h1>
              </TableCell>
              <TableCell>DAKUON</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>K S T N H M Y R W</TableCell>
            <TableCell>G Z D B P</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h4">あ</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                か　さ　た　な　は　ま　や　ら　わ
              </Typography>
            </TableCell>
            <TableCell>
              {" "}
              <Typography variant="h4">が　ざ　だ　ば　ぱ</Typography>
            </TableCell>
          </TableRow>
        </Table>
        <img src={hiraganatable} alt="" />

        <Box display="flex" alignItems="baseline">
          <Typography
            variant="h3"
            sx={{ textDecoration: "underline", marginRight: "20px" }}
          >
            Katakana
          </Typography>
          <Typography variant="h5" color="rgb(100,100,100)">
            カタカナ
          </Typography>
        </Box>
        <Box display="flex" alignItems="baseline">
          <Typography
            variant="h3"
            sx={{ textDecoration: "underline", marginRight: "20px" }}
          >
            Kanji
          </Typography>
          <Typography variant="h5" color="rgb(100,100,100)">
            漢字
          </Typography>
        </Box>
        <Box display="flex" alignItems="baseline">
          <Typography
            variant="h3"
            sx={{ textDecoration: "underline", marginRight: "20px" }}
          >
            Romaji
          </Typography>
        </Box>
        <Box display="flex" alignItems="baseline">
          <Typography
            variant="h3"
            sx={{ textDecoration: "underline", marginRight: "20px" }}
          >
            Furigana
          </Typography>
          <Typography variant="h5" color="rgb(100,100,100)">
            ふりがな　（振り仮名）
          </Typography>
        </Box>
      </Card>
    </LearnContainer>
  );
};

export default Learn;
