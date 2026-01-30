import { Box, Typography, Stack } from "@mui/material";
import YoonHiraganaLearn from "./YoonHiraganaLearn";
import DakuonHiraganaLearn from "./DakuonHiraganaLearn";
import SeionHiraganaLearn from "./SeionHiraganaLearn";
import { useState } from "react";
import MobileTableCard from "./MobileTableCard";
import HiraganaDescription from "./HiraganaDescription";
import GiveItAShot from "./GiveItAShot";

const HiraganaLearnSection = () => {
  const [selectedTab, setSelectedTab] = useState("seion");

  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });

  const mobileActiveHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Box width="100%" sx={{ minWidth: 0 }}>
          <HiraganaDescription />
          <Box
            display="flex"
            flexDirection="column"
            position="relative"
            width="100%"
            sx={{ paddingTop: { xs: "30px", md: "none" } }}
          >
            <Stack
              direction="row"
              sx={{
                position: "relative",
                marginLeft: "5px",

                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid rgb(210, 210, 210)",
                  width: "16.3%",
                }}
              >
                <Box
                  onClick={() => setSelectedTab("seion")}
                  paddingX="5px"
                  paddingTop="3px"
                  paddingBottom={selectedTab === "seion" ? "2px" : "0"}
                  marginRight="3px"
                  borderBottom={
                    selectedTab === "seion"
                      ? "1px transparent "
                      : "1px solid rgb(183, 183, 183)"
                  }
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    backgroundColor:
                      selectedTab === "seion"
                        ? "rgb(255, 232, 85)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
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
                  paddingBottom={selectedTab === "dakuon" ? "2px" : "0"}
                  marginRight="3px"
                  borderBottom={
                    selectedTab === "dakuon"
                      ? "1px transparent "
                      : "1px solid rgb(183, 183, 183)"
                  }
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 50,
                    backgroundColor:
                      selectedTab === "dakuon"
                        ? "rgb(255, 232, 85)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
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
                  paddingBottom={selectedTab === "yoon" ? "2px" : "0"}
                  marginRight="3px"
                  borderBottom={
                    selectedTab === "yoon"
                      ? "1px transparent "
                      : "1px solid rgb(183, 183, 183)"
                  }
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 113,
                    backgroundColor:
                      selectedTab === "yoon"
                        ? "rgb(255, 232, 85)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
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
              </Box>
              <Box>
                <MobileTableCard
                  char={activeItem.character}
                  romaji={activeItem.romaji}
                />
              </Box>
            </Stack>
            <Box marginBottom="20px" overflow="hidden">
              {selectedTab === "seion" && (
                <SeionHiraganaLearn mobileActiveHover={mobileActiveHover} />
              )}
              {selectedTab === "dakuon" && (
                <DakuonHiraganaLearn mobileActiveHover={mobileActiveHover} />
              )}
              {selectedTab === "yoon" && (
                <YoonHiraganaLearn mobileActiveHover={mobileActiveHover} />
              )}
            </Box>
          </Box>
          <GiveItAShot />
        </Box>
      </Box>
    </Box>
  );
};

export default HiraganaLearnSection;
