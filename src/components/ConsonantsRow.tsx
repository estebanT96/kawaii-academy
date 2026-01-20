import { TableCell, TableRow, Typography } from "@mui/material";
import { consonants } from "../data/filteredHiragana";
const ConsonantsRow = () => {
  return (
    <TableRow>
      {consonants.map((consonant, index) => (
        <TableCell key={index}>
          <Typography color="rgb(0, 104, 215)" paddingLeft="20px" variant="h4">
            {consonant}
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default ConsonantsRow;
