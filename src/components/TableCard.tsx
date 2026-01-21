import { Box, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
}

const TableCard = ({ character, romaji }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      paddingBottom="1px"
    >
      <Typography variant="h1">{character}</Typography>
      <Typography marginBottom="10px" color="rgb(255, 61, 61)" variant="h3">
        [{romaji}]
      </Typography>
    </Box>
  );
};

export default TableCard;
