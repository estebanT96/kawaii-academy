import { Box, Container } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";
import WordLearnSection from "../components/WordLearnSection";
import KatakanaLearnSection from "../components/KatakanaLearnSection";

const Learn = () => (
  <Container maxWidth="lg" sx={{ paddingTop: "50px", background: "#4797ed43" }}>
    <LearnContainer>
      <Box
        sx={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          border: "1px solid rgb(0, 95, 164)",
          borderRadius: "5px",
          overflow: "hidden",
          boxShadow: "5px 5px 0px rgb(0, 95, 164)",
        }}
      >
        <HiraganaLearnSection />
        <KatakanaLearnSection />
        <WordLearnSection />
      </Box>
    </LearnContainer>
  </Container>
);

export default Learn;
