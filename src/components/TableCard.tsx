import { Box, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
}

const TableCard = ({ character, romaji }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
    >
      <Typography variant="h1">{character}</Typography>
      <Typography marginBottom="10px" color="rgb(255, 67, 67)" variant="h4">
        [ {romaji ? `${romaji}` : "select kana"} ]
      </Typography>
    </Box>
  );
};

export default TableCard;
