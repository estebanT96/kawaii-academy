import { TableCell, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
  onHover: (character: string, romaji: string) => void;
}

const YoonCell = ({ character, romaji, onHover }: Props) => {
  return (
    <TableCell
      align="center"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        transition: "all ease 150ms",
        whiteSpace: "nowrap",
        borderBottom: "2px solid rgb(236, 236, 236)",
        "&:hover": {
          color: "rgb(255, 97, 35)",
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
      key={character}
      onMouseEnter={() => onHover(character, romaji)}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: { xs: 600 }, fontSize: { xs: "16px", md: "24px" } }}
      >
        {character}
      </Typography>
    </TableCell>
  );
};
export default YoonCell;
