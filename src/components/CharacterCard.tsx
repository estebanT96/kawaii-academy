import { Box, Typography } from "@mui/material";

interface Props {
  char: string;
  romaji: string;
}

const CharacterCard = ({ char, romaji }: Props) => {
  return (
    <Box
      width="15%"
      marginLeft="50px"
      height="250px"
      marginTop="100px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">{char}</Typography>
      <Typography variant="h5" color="rgb(255, 97, 35)">
        [{romaji}]
      </Typography>
    </Box>
  );
};

export default CharacterCard;
