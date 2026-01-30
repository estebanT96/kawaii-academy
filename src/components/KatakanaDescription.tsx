import { Box, List, ListItem, Typography } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";

const KatakanaDescription = () => {
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
          Katakana
        </Typography>
        <Typography
          variant="h5"
          color="rgb(160, 160, 160)"
          sx={{ fontSize: { xs: "14px", md: "20px" } }}
        >
          カタカナ
        </Typography>
      </Box>
      <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>Katakana</strong> is primarily used for foreign loanwords
          (like 'coffee' or 'computer'), foreign names, and onomatopoeia (sound
          effects). Katakana holds the exact same sounds as Hiragana but uses
          sharper, more angular characters.
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
              The 46 standard characters. Unlike Hiragana's curvy strokes, these
              have sharp, straight lines."(e.g., ア, カ, サ).
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
              Katakana characters with two quotation marks, called dakuten (゛)
              or a circle, called handakuten (゜)to create voiced sounds (e.g.,
              カ "ka" becomes ガ "ga").
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
              <strong>Yoon (Combo Sounds): </strong>A combination of a
              Characters combined with a small ya, yu, or yo to create blended
              sounds. (e.g., キャ "kya").
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>Pro Tip: </strong>
          You will see Katakana everywhere on restaurant menus (burgers, pasta)
          and technology (smartphone, internet)!
        </Typography>
      </Box>
    </>
  );
};

export default KatakanaDescription;
