import { Box, Container, Link, Typography } from "@mui/material";
import LearnContainer from "../components/ui/LearnContainer";
import HiraganaLearnSection from "../components/HiraganaLearnSection";
import WordLearnSection from "../components/WordLearnSection";
import KatakanaLearnSection from "../components/KatakanaLearnSection";
import { Link as RouterLink } from "react-router-dom";

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
        {" "}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography
            variant="h3"
            sx={{
              textDecoration: "underline",
              marginRight: "20px",
              marginBottom: "15px",
              fontSize: { xs: "20px", md: "42px" },
            }}
          >
            Introduction
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            Japanese has three writing systems:
          </Typography>
          <Typography
            fontWeight="600"
            color="rgb(8, 107, 255)"
            sx={{ fontSize: { xs: "12px", md: "16px" } }}
          >
            1. Hiragana
          </Typography>
          <Typography
            fontWeight="600"
            color="rgb(255, 62, 62)"
            sx={{ fontSize: { xs: "12px", md: "16px" } }}
          >
            2. Katakana
          </Typography>
          <Typography
            fontWeight="600"
            color="rgb(223, 163, 0)"
            sx={{ fontSize: { xs: "12px", md: "16px" } }}
          >
            3. Kanji
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            The first two are the ABC's of the language, we will focus on
            mastering these phonetic characters first to build your foundation.
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            You can always go back to our{" "}
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: "rgb(223, 163, 0)",
                fontWeight: "600",
                "&:hover": {
                  filter: "brightness(130%)",
                },
              }}
            >
              Study
            </Link>{" "}
            page to put your skills to the test!
          </Typography>
        </Box>
        <HiraganaLearnSection />
        {/* <KatakanaLearnSection />
        <WordLearnSection /> */}
      </Box>
    </LearnContainer>
  </Container>
);

export default Learn;
