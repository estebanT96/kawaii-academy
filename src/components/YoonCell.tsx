import { TableCell, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
  onHover:(character: string, romaji:string) => void;
}

const YoonCell = ({ character, romaji, onHover }: Props) => {
  return (
    <TableCell
      sx={{
        border: "1px solid rgb(224, 224, 224)",
        fontFamily: "'Poppins', sans-serif",
        transition: "all ease 150ms",
        whiteSpace: "nowrap",
        "&:hover": {
          backgroundColor: "#dedede",
          color: "rgb(255, 97, 35)",
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
      key={character}
      onMouseEnter={() => onHover(character, romaji)}
    >
      <Typography variant="h5">{character}</Typography>
    </TableCell>
  );
};
export default YoonCell;
