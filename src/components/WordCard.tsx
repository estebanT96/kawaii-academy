import { Box, Typography } from "@mui/material";

interface Word {
  kanaWord: string;
  romaji: string;
}

interface Props {
  words: Word[];
}

const WordCard = ({ words }: Props) => {
  return (
    <Box paddingTop="500px" display="flex" position="absolute" left={850}>
      {words.map((word) => (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2">{word.kanaWord}</Typography>
          <Typography variant="h4" color="rgb(255, 97, 35)">
            [ { word.romaji ? `${word.romaji}` : 'hover on a word'} ]
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default WordCard;
