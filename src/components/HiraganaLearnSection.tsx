import { Box, List, Link, ListItem, Typography, Stack } from "@mui/material";
import YoonHiraganaLearn from "./YoonHiraganaLearn";
import DakuonHiraganaLearn from "./DakuonHiraganaLearn";
import SeionHiraganaLearn from "./SeionHiraganaLearn";
import SunnyIcon from "@mui/icons-material/Sunny";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const HiraganaLearnSection = () => {
  const [selectedTab, setSelectedTab] = useState("seion");

  return (
    <Box>
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

      <Box display="flex" justifyContent="space-between">
        <Box width="100%" sx={{ minWidth: 0 }}>
          <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              <strong>Hiragana</strong> is the foundation of Japanese, it is
              made up of 3 main categories (seion, dakuon and yoon) and contains
              46 basic characters that represent every sound in the language.
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
              You should learn these first, once you know Hiragana, you can
              pronounce any Japanese word.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                color: "red",
                textAlign: "center",
                marginTop: "5px",
                fontWeight: "600",
              }}
            >
              [select a character in a table and it will be displayed along with
              its pronounciation]
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            position="relative"
            sx={{ paddingTop: { xs: "30px", md: "none" } }}
          >
            <Stack
              direction="row"
              sx={{
                position: "relative",
                marginLeft: "5px",
                borderBottom: "1px solid rgb(210, 210, 210)",
                width: "16%",
              }}
            >
              <Box
                onClick={() => setSelectedTab("seion")}
                paddingX="5px"
                paddingTop="3px"
                paddingBottom={selectedTab === "seion" ? "7px" : "3px"}
                marginRight="3px"
                borderBottom={
                  selectedTab === "seion"
                    ? "1px transparent "
                    : "1px solid rgb(183, 183, 183)"
                }
                sx={{
                  position: "absolute",
                  bottom: "-1px",
                  left: 0,
                  backgroundColor:
                    selectedTab === "seion"
                      ? "rgb(255, 242, 158)"
                      : "rgb(237, 207, 4)",
                  transition: "all ease 200ms",
                  borderTop:
                    selectedTab === "seion"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderLeft:
                    selectedTab === "seion"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderRight:
                    selectedTab === "seion"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderBottom: "none",
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                <Typography color="black" fontWeight="500" fontSize="12px">
                  Seion
                </Typography>
              </Box>
              <Box
                onClick={() => setSelectedTab("dakuon")}
                paddingX="5px"
                paddingTop="3px"
                paddingBottom={selectedTab === "dakuon" ? "7px" : "3px"}
                marginRight="3px"
                borderBottom={
                  selectedTab === "dakuon"
                    ? "1px transparent "
                    : "1px solid rgb(183, 183, 183)"
                }
                sx={{
                  position: "absolute",
                  bottom: "-1px",
                  left: 50,
                  backgroundColor:
                    selectedTab === "dakuon"
                      ? "rgb(255, 242, 158)"
                      : "rgb(237, 207, 4)",
                  transition: "all ease 200ms",
                  borderTop:
                    selectedTab === "dakuon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderLeft:
                    selectedTab === "dakuon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderRight:
                    selectedTab === "dakuon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderBottom: "none",
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                <Typography color="black" fontWeight="500" fontSize="12px">
                  Dakuon
                </Typography>
              </Box>
              <Box
                onClick={() => setSelectedTab("yoon")}
                paddingX="5px"
                paddingTop="3px"
                paddingBottom={selectedTab === "yoon" ? "7px" : "3px"}
                marginRight="3px"
                borderBottom={
                  selectedTab === "yoon"
                    ? "1px transparent "
                    : "1px solid rgb(183, 183, 183)"
                }
                sx={{
                  position: "absolute",
                  bottom: "-1px",
                  left: 113,
                  backgroundColor:
                    selectedTab === "yoon"
                      ? "rgb(255, 242, 158)"
                      : "rgb(237, 207, 4)",
                  transition: "all ease 200ms",
                  borderTop:
                    selectedTab === "yoon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderLeft:
                    selectedTab === "yoon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderRight:
                    selectedTab === "yoon"
                      ? "1px solid rgb(237,207,4)"
                      : "rgb(237, 207, 4)",
                  borderBottom: "none",
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                <Typography color="black" fontWeight="500" fontSize="12px">
                  Yoon
                </Typography>
              </Box>
            </Stack>
            <Box marginBottom="20px" overflow="hidden">
              {selectedTab === "seion" && <SeionHiraganaLearn />}
              {selectedTab === "dakuon" && <DakuonHiraganaLearn />}
              {selectedTab === "yoon" && <YoonHiraganaLearn />}
            </Box>
          </Box>
          <Box width="100%">
            <Box
              display="flex"
              alignItems="center"
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

export default HiraganaLearnSection;
