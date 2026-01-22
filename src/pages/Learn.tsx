import { Card } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";
import KatakanaLearnSection from "../components/KatanaLearnSection";
import WordLearnSection from "../components/WordLearnSection";

const Learn = () => (
  <LearnContainer>
    <Card
      sx={{ 
        padding: "15px",
        maxWidth: "1000px",
        width:"auto",
        margin: "0 auto",
      }}
    >
      <HiraganaLearnSection />
      {/* <KatakanaLearnSection /> */}
      {/* <WordLearnSection /> */}
    </Card>
  </LearnContainer>
);

export default Learn;
