import { Box, List, ListItem, Typography } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
const HiraganaDescription = () => {
  return (
    <>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            marginRight: "20px",
            marginBottom: "15px",
            fontSize: { xs: "20px", md: "42px" },
          }}
        >
          Hiragana
        </Typography>
        <Typography
          variant="h5"
          color="rgb(160, 160, 160)"
          sx={{ fontSize: { xs: "14px", md: "20px" } }}
        >
          ひらがな
        </Typography>
      </Box>
      <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>Hiragana</strong> is the foundation of Japanese, it is made up
          of 3 main categories (seion, dakuon and yoon) and contains 46 basic
          characters that represent every sound in the language.
        </Typography>
        <List>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />{" "}
             <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Seion (Basic Sounds): </strong>
              The 46 primary "clear sounds" of Japanese.
            </Typography>
          </ListItem>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />
             <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Dakuon (Voiced Sounds): </strong>
              Characters modified with two dots (゛) or a circle (゜) to change
              their sound (e.g., "ka" becomes "ga", "ha" becomes "ba" or "pa").
            </Typography>
          </ListItem>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />
          <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Yoon (Combo Sounds): </strong>A combination of a character
              plus a small ya, yu, or yo. They blend together to make one smooth
              sound (e.g., き "ki" + ゃ "ya" = きゃ "kya").
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          You should learn these first, once you know Hiragana, you can
          pronounce any Japanese word.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "red",
            textAlign: "center",
            marginTop: "5px",
            fontWeight: "600",
          }}
        >
          [select a character from a table and it will be displayed along with its
          pronounciation]
        </Typography>
      </Box>
    </>
  );
};

export default HiraganaDescription;
