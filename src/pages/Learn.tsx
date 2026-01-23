import { Box, Card } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";
// import KatanaLearnSection from "../components/KatanaLearnSection";
import WordLearnSection from "../components/WordLearnSection";
import KatanaLearnSection from "../components/KatanaLearnSection";

const Learn = () => (
  <LearnContainer>
    <Card
      sx={{
        padding: "15px",
        maxWidth: "1000px",
        width: "auto",
        margin: "0 auto",
        border: "none",
        borderRadius: "0",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
      }}
    >
      <HiraganaLearnSection />
      <Box
        height="2px"
        width="100%"
        sx={{
          backgroundColor: "black",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      ></Box>
      <KatanaLearnSection />
      <Box
        height="2px"
        width="100%"
        sx={{
          backgroundColor: "black",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      ></Box>
      <WordLearnSection />
    </Card>
  </LearnContainer>
);

export default Learn;
