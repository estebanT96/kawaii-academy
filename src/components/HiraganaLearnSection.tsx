import { Box, List, Link, ListItem, Typography } from "@mui/material";
import { YOON_HIRAGANA_ROWS, yoonRowHeader } from "../data/filteredHiragana";
import YoonHiraganaLearn from "./YoonHiraganaLearn";
import DakuonHiraganaLearn from "./DakuonHiraganaLearn";
import SeionHiraganaLearn from "./SeionHiraganaLearn";
import SunnyIcon from "@mui/icons-material/Sunny";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

const HiraganaLearnSection = () => {
  return (
    <Box
      sx={{
        background: "rgb(255, 255, 255)",
        padding: { xs: "15px", md: "30px" },
      }}
    >
      <Box
        display="flex"
        alignItems="baseline"
        width="100%"
        top="0"
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

      <Box display="flex" justifyContent="space-between">
        <Box width="100%" sx={{ minWidth: 0 }}>
          <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              <strong>Hiragana</strong> is the foundation of the Japanese
              language, it is made up of 3 main categories and contains 46 basic
              characters that represent every sound in Japanese.
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
                  The 46 primary "clear sounds" of Japanese. This is the
                  foundation of the language (e.g., あ, か, さ).
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
                  Characters modified with two dots (゛) or a circle (゜) to
                  change their sound (e.g., "ka" becomes "ga", "ha" becomes "ba"
                  or "pa").
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
                  character plus a small ya, yu, or yo. They blend together to
                  make one smooth sound (e.g., き "ki" + ゃ "ya" = きゃ "kya").
                </Typography>
              </ListItem>
            </List>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              You should learn these first! Once you know Hiragana, you can
              pronounce any Japanese word.
            </Typography>
          </Box>
          <SeionHiraganaLearn />
          <DakuonHiraganaLearn />
          <YoonHiraganaLearn
            rowHeader={yoonRowHeader}
            rows={YOON_HIRAGANA_ROWS}
          />
          <Box width="100%">
            <Box
              display="flex"
              alignItems="center"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  marginRight:{xs:"0", md:"10px"}
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

export default HiraganaLearnSection;
