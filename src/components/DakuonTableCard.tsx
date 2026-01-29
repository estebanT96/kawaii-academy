import { Box, Typography } from "@mui/material";

interface Props {
  character: string;
  romaji: string;
}

const DakuonTableCard = ({ character, romaji }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginRight="30px"
      width="25%"
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Typography variant="h1" sx={{ fontSize: { sm: "64px", md: "120px" } }}>
        {character}
      </Typography>
      <Typography
        variant="h5"
        marginBottom="10px"
        color="rgb(255, 67, 67)"
        textAlign="center"
        sx={{ fontSize: { sm: "16px", md: "30px" } }}
      >
        [ {romaji ? `${romaji}` : "select kana"} ]
      </Typography>
    </Box>
  );
};

export default DakuonTableCard;
