import { Box, Container } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";

import Introduction from "../components/Introduction";
import KatakanaLearnSection from "../components/KatakanaLearnSection";
import WordLearnSection from "../components/WordLearnSection";

const Learn = () => (
  <Container sx={{ paddingTop: "30px" }}>
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
          background: "rgb(255, 255, 255)",
          padding: { xs: "15px", md: "30px" },
        }}
      >
        <Introduction />
        <HiraganaLearnSection />
        <KatakanaLearnSection />
        <WordLearnSection />
      </Box>
    </LearnContainer>
  </Container>
);

export default Learn;
