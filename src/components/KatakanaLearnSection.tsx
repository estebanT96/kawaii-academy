import { Box, Typography, List, ListItem } from "@mui/material";
import { YOON_KATAKANA_ROWS, yoonRowHeader } from "../data/filteredKatakana";
import YoonKatakanaLearn from "./YoonKatakanaLearn";
import DakuonKatakanaLearn from "./DakuonKatakanaLearn";
import SeionKatakanaLearn from "./SeionKatakanaLearn";
import SunnyIcon from "@mui/icons-material/Sunny";

const HiraganaLearnSection = () => {
  return (
    <Box
      sx={{
        background: "rgb(255, 255, 255)", //color de fondo
        padding: { xs: "15px", md: "30px" },
      }}
    >
      <Box
        display="flex"
        alignItems="baseline"
        width="auto"
        sx={{
          justifyContent: { xs: "flex-start" },
        }}
      >
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
          sx={{ fontSize: { xs: "14px", md: "24px" } }}
        >
          カタカナ
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" width="100%">
        <Box>
          <Box sx={{ marginBottom: "30px", maxWidth: "700px" }}>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              <strong>Katakana</strong> is primarily used for foreign loanwords
              (like 'coffee' or 'computer'), foreign names, and onomatopoeia
              (sound effects). It represents the exact same sounds as Hiragana
              but uses sharper, more angular characters.
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
                <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                  <strong>Seion (Basic Sounds): </strong>
                  The 46 standard characters. Unlike Hiragana's curvy strokes,
                  these have sharp, straight lines."(e.g., ア, カ, サ).
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
                <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                  <strong>Dakuon (Voiced Sounds): </strong>
                  Katakana characters with two dots (゛) or a circle (゜) to
                  create voiced sounds (e.g., カ "ka" becomes ガ "ga").
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
                <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                  <strong>Yoon (Combo Sounds): </strong>A combination of a
                  Characters combined with a small ya, yu, or yo to create
                  blended sounds, often used to mimic foreign pronunciations
                  (e.g., キャ "kya").
                </Typography>
              </ListItem>
            </List>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              <strong>Pro Tip: </strong>
              You will see Katakana everywhere on restaurant menus (burgers,
              pasta) and technology (smartphone, internet)!"
            </Typography>
          </Box>
          <SeionKatakanaLearn />
          <DakuonKatakanaLearn />
          <YoonKatakanaLearn
            rowHeader={yoonRowHeader}
            rows={YOON_KATAKANA_ROWS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
