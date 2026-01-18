import { ThemeProvider, CssBaseline, Box, Grid } from "@mui/material";
import { theme } from "./styles/styles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudyCard from "./components/StudyCard";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <NavBar />
              </Grid>
              <Routes>
                <Route path="/" element={<StudyCard />}></Route>
                <Route path="/study" element={<StudyCard />}></Route>
              </Routes>
            </Grid>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
