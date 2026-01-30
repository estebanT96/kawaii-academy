import { TableCell, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
  onHover: (character: string, romaji: string) => void;
  mobileActiveHover: (character: string, romaji: string) => void;
}

const KanaCell = ({ character, romaji, onHover, mobileActiveHover }: Props) => {
  return (
    <TableCell
      align="center"
      sx={{
        transition: "all ease 150ms",
        whiteSpace: "nowrap",
        borderBottom: "2px solid rgb(236, 236, 236)",
        "&:hover": {
          color: "rgb(255, 97, 35)",
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      }}
      onMouseEnter={() => onHover(character, romaji)}
      onClick={() => mobileActiveHover(character, romaji)}
      key={character}
    >
      <Typography
        sx={{ fontWeight: { xs: 600 }, fontSize: { xs: "16px", md: "24px" } }}
      >
        {character}
      </Typography>
    </TableCell>
  );
};
export default KanaCell;
