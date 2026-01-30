import { Box, Typography, Stack } from "@mui/material";
import YoonKatakanaLearn from "./YoonKatakanaLearn";
import DakuonKatakanaLearn from "./DakuonKatakanaLearn";
import SeionKatakanaLearn from "./SeionKatakanaLearn";
import KatakanaDescription from "./KatakanaDescription";
import { useState } from "react";
import MobileTableCard from "./MobileTableCard";
import GiveItAShot from "./GiveItAShot";

const KatakanaLearnSection = () => {
  const [selectedTab, setSelectedTab] = useState("seion");

  const [activeItem, setActiveItem] = useState({
    character: "",
    romaji: "",
  });

  const mobileActiveHover = (character: string, romaji: string) => {
    setActiveItem({ character: character, romaji: romaji });
  };

  return (
    <Box marginTop="30px" display="flex" justifyContent="space-between">
      <Box width="100%" sx={{ minWidth: 0 }}>
        <KatakanaDescription />
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
                      ? "rgb(255, 232, 85)"
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
                <Typography color="black" fontWeight="500" fontSize="12px">
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
                  left: 45,
                  backgroundColor:
                    selectedTab === "dakuon"
                      ? "rgb(255, 232, 85)"
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
                <Typography color="black" fontWeight="500" fontSize="12px">
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
                  left: 103,
                  backgroundColor:
                    selectedTab === "yoon"
                      ? "rgb(255, 232, 85)"
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
                <Typography color="black" fontWeight="500" fontSize="12px">
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
              <SeionKatakanaLearn mobileActiveHover={mobileActiveHover} />
            )}
            {selectedTab === "dakuon" && (
              <DakuonKatakanaLearn mobileActiveHover={mobileActiveHover} />
            )}
            {selectedTab === "yoon" && (
              <YoonKatakanaLearn mobileActiveHover={mobileActiveHover} />
            )}
          </Box>
          <GiveItAShot />
        </Box>
      </Box>
    </Box>
  );
};

export default KatakanaLearnSection;
