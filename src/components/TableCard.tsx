import { Box, Typography } from "@mui/material";
import SymbolContainer from "./ui/SymbolContainer";

interface Props {
  character: string;
  romaji: string;
}

const TableCard = ({ character, romaji }: Props) => {
  return (
    <Box
      sx={{
        width: "15%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "90px",
        marginLeft: "10px",
      }}
    >
      <Typography variant="h1">{character}</Typography>
      <Typography component="div">
        <SymbolContainer sx={{ fontSize: "42px", color: "rgb(255, 97, 35)" }}>
          [{romaji}]
        </SymbolContainer>
      </Typography>
    </Box>
  );
};

export default TableCard;
