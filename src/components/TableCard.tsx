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
      paddingLeft="10%"
    >
      <Typography variant="h1">{character}</Typography>
      <Typography marginBottom="10px" color="rgb(255, 61, 61)" variant="h4">
        [ {romaji ? `${romaji}` : "hover on kana"} ]
      </Typography>
    </Box>
  );
};

export default TableCard;
