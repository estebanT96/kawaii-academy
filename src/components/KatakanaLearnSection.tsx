import { Box, Typography, List, Link, ListItem } from "@mui/material";
import { YOON_KATAKANA_ROWS, yoonRowHeader } from "../data/filteredKatakana";
import YoonKatakanaLearn from "./YoonKatakanaLearn";
import DakuonKatakanaLearn from "./DakuonKatakanaLearn";
import SeionKatakanaLearn from "./SeionKatakanaLearn";
import SunnyIcon from "@mui/icons-material/Sunny";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

const KatakanaLearnSection = () => {
  return (
    <Box marginTop="30px">
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

      <Box display="flex" justifyContent="space-between">
        <Box width="100%" sx={{ minWidth: 0 }}>
          <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
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
          <Box width="100%">
            <Box
              display="flex"
              alignItems="center"
              marginBottom="30px"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  marginRight: { xs: "0", md: "10px" },
                }}
              >
                Ready to test what you learned? Give it a shot!{" "}
              </Typography>{" "}
              <Link
                underline="none"
                component={RouterLink}
                key={links[1].id}
                to={links[1].path}
              >
                <Box
                  padding="2px 5px"
                  borderRadius="5px"
                  sx={{
                    backgroundColor: links[1].color,
                    transition: "all ease 200ms",
                    border: links[1].border,
                    boxShadow: links[1].boxShadow,
                    "&:hover": {
                      cursor: "pointer",
                      filter: "brightness(1.1)",
                      boxShadow: links[1]["&:hover"],
                    },
                    "&:active": {
                      transform: "translate(1px, 1px)",
                      boxShadow: "1px 1px 0px transparent ",
                    },
                  }}
                >
                  <Typography color="black" fontWeight="500" fontSize="12px">
                    {links[1].tag}
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KatakanaLearnSection;
