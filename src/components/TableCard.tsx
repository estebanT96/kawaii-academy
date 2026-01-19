import { Box, Typography } from "@mui/material";
import SymbolContainer from "./SymbolContainer";

const TableCard = () => {
  return (
    <Box
      width="20%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">あ</Typography>
      <Typography>
        <SymbolContainer sx={{ fontSize: "42px", color: "rgb(255, 97, 35)" }}>
          a
        </SymbolContainer>
      </Typography>
    </Box>
  );
};

export default TableCard;
