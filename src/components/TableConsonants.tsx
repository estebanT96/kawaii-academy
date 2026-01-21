import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

interface Props {
  consonants: string[];
}

const TableConsonants = ({ consonants }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {consonants.map((consonant, i) => (
          <TableCell key={i}>{consonant}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableConsonants;
