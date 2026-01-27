import StudyCard from "../components/StudyCard";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ paddingY: "30px" }}>
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
        <StudyCard />
      </Box>
    </Container>
  );
};

export default Home;
