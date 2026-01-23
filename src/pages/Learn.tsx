import { Box } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";
import WordLearnSection from "../components/WordLearnSection";
import KatanaLearnSection from "../components/KatanaLearnSection";

const Learn = () => (
  <LearnContainer>
    <Box
      sx={{
        maxWidth: "1000px",
        width: "auto",
        margin: "0 auto",
        border: "none",
      }}
    >
      <HiraganaLearnSection />
      <KatanaLearnSection />
      <WordLearnSection />
    </Box>
  </LearnContainer>
);

export default Learn;
