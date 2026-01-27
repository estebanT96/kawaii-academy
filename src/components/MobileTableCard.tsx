import { Box, Typography } from "@mui/material";


interface Props {
  char: string;
  romaji: string;
}

const MobileTableCard = ({ char, romaji }: Props) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        border: "1px solid rgb(0, 0, 0)",
        borderRadius: "5px",
        boxShadow: "2px 2px 0px black",
        background: "rgba(255, 234, 127, 0.79)",
        padding: "2px 5px",
      }}
      alignItems="center"
    >
      <Typography fontSize="16px" fontWeight="600" marginRight="2px">
        {char}
      </Typography>
      <Typography color="rgb(255, 67, 67)" fontWeight="600" fontSize="10px">
        [{romaji ? romaji : "select kana"}]
      </Typography>
    </Box>
  );
};

export default MobileTableCard;
