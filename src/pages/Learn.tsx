import { Card } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";

const Learn = () => {
  return (
    <LearnContainer>
      <Card
        sx={{
          padding: "15px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <HiraganaLearnSection />
        {/* <KatakanaLearnSection /> */}
      </Card>
    </LearnContainer>
  );
};

export default Learn;
