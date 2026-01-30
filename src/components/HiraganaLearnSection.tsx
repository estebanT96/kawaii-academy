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
                  width: "15%",
                }}
              >
                <Box
                  onClick={() => setSelectedTab("seion")}
                  paddingX="5px"
                  paddingTop="3px"
                  paddingBottom={selectedTab === "seion" ? "1px" : "0px"}
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
                        ? "rgb(244, 211, 0)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
                    borderTop: "1px solid rgb(237, 207, 4)",
                    borderLeft: "1px solid rgb(237, 207, 4)",
                    borderRight: "1px solid rgb(237, 207, 4)",
                    borderBottom:
                      selectedTab === "seion"
                        ? "1px solid transparent"
                        : "1px solid rgb(209, 209, 209)",
                    "&:hover": {
                      cursor: "pointer",
                      filter: "brightness(1.1)",
                    },
                  }}
                >
                  <Typography color="black" fontWeight="500" fontSize="14px">
                    Seion
                  </Typography>
                </Box>
                <Box
                  onClick={() => setSelectedTab("dakuon")}
                  paddingX="5px"
                  paddingTop="3px"
                  paddingBottom={selectedTab === "dakuon" ? "1px" : "0"}
                  borderBottom={
                    selectedTab === "dakuon"
                      ? "1px transparent "
                      : "1px solid rgb(183, 183, 183)"
                  }
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 51,
                    backgroundColor:
                      selectedTab === "dakuon"
                        ? "rgb(244, 211, 0)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
                    borderTop: "1px solid rgb(237, 207, 4)",
                    borderLeft: "1px solid rgb(237, 207, 4)",
                    borderRight: "1px solid rgb(237, 207, 4)",
                    borderBottom:
                      selectedTab === "dakuon"
                        ? "1px solid transparent"
                        : "1px solid rgb(209, 209, 209)",
                    "&:hover": {
                      cursor: "pointer",
                      filter: "brightness(1.1)",
                    },
                  }}
                >
                  <Typography color="black" fontWeight="500" fontSize="14px">
                    Dakuon
                  </Typography>
                </Box>
                <Box
                  onClick={() => setSelectedTab("yoon")}
                  paddingX="5px"
                  paddingTop="3px"
                  paddingBottom={selectedTab === "yoon" ? "1px" : "0"}
                  borderBottom={
                    selectedTab === "yoon"
                      ? "1px transparent "
                      : "1px solid rgb(183, 183, 183)"
                  }
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 118,
                    backgroundColor:
                      selectedTab === "yoon"
                        ? "rgb(244, 211, 0)"
                        : "rgb(237, 207, 4)",
                    transition: "all ease 100ms",
                    borderTop: "1px solid rgb(237, 207, 4)",
                    borderLeft: "1px solid rgb(237, 207, 4)",
                    borderRight: "1px solid rgb(237, 207, 4)",
                    borderBottom:
                      selectedTab === "yoon"
                        ? "1px solid transparent"
                        : "1px solid rgb(209, 209, 209)",
                    "&:hover": {
                      cursor: "pointer",
                      filter: "brightness(1.1)",
                    },
                  }}
                >
                  <Typography color="black" fontWeight="500" fontSize="14px">
                    Yoon
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
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
