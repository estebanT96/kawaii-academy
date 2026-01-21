import { TableCell, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
  onHover: (character: string, romaji: string) => void;
}

const KanaCell = ({ character, romaji, onHover }: Props) => {
  return (
    <TableCell
      sx={{
        border: "1px solid rgb(224, 224, 224)",
        fontFamily: "'Poppins', sans-serif",
        transition: "all ease 150ms",
        "&:hover": {
          backgroundColor: "#dedede",
          color: "rgb(255, 97, 35)",
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
      onMouseEnter={() => onHover(character, romaji)}
      key={character}
    >
      <Typography variant="h5">{character}</Typography>
    </TableCell>
  );
};
export default KanaCell;
