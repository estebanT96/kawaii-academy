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
        transition: "all ease 150ms",
        whiteSpace: "nowrap",
        borderBottom: "2px solid rgb(229, 229, 229)",
        "&:hover": {
          color: "rgb(255, 97, 35)",
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
      onMouseEnter={() => onHover(character, romaji)}
      key={character}
    >
      <Typography
        sx={{ fontWeight: { xs: 600 }, fontSize: { xs: "14px", md: "20px" } }}
      >
        {character}
      </Typography>
    </TableCell>
  );
};
export default KanaCell;
