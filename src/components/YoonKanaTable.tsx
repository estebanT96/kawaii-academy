import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VowelContainer from "./ui/VowelContainer";
import KanaCell from "./KanaCell";

interface KanaChar {
  character: string;
  romaji: string;
}

interface Row {
  rowSyllable: string;
  chars: KanaChar[];
}

interface Props {
  consonants: string[];
  rows: Row[];
  onHover: (character: string, romaji: string) => void;
  mobileActiveHover: (character: string, romaji: string) => void;
}

const YoonKanaTable = ({
  consonants,
  rows,
  onHover,
  mobileActiveHover,
}: Props) => {
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "80%" } }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {consonants.map((item) => (
                <TableCell
                  align="center"
                  key={item}
                  sx={{
                    borderBottom: "2px solid rgb(205, 205, 205)",
                    fontSize: { xs: "18px", md: "20px" },
                    color: "rgb(62, 110, 255)",
                  }}
                >
                  <VowelContainer>{item}</VowelContainer>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rowSyllable}>
                <TableCell
                  sx={{
                    borderBottom: "2px solid rgb(236, 236, 236)",
                    fontSize: { xs: "18px", md: "20px" },
                    color: "rgb(255, 63, 63)",
                  }}
                >
                  <VowelContainer>{row.rowSyllable}</VowelContainer>
                </TableCell>
                {row.chars.map((data) => (
                  <KanaCell
                    mobileActiveHover={mobileActiveHover}
                    key={data.character}
                    character={data.character}
                    romaji={data.romaji}
                    onHover={onHover}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginTop: "10px" }}
        >
          Yoon characters are the result of a "pair-up" between two syllabic
          symbols, and should only be combined with "ya", "yu" and "yo".
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          The first symbol you see in the yoon table, is a combination of:{" "}
          <strong>ki + ya </strong> that results in <strong>"kya".</strong>
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          As you can see, "ya" kana is slightly smaller than "ki", this will
          always apply when working with yoon kana. So keep an eye out for these
          use cases!
        </Typography>
      </Box>
    </>
  );
};

export default YoonKanaTable;
