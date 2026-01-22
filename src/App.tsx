import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./styles/styles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box
            display="grid"
            sx={{
              gridTemplateRows: "auto 1fr",
              gridTemplateAreas: {
                xs: `"nav" 
                   "main"`,
                md: `"nav nav" 
                   "main main"`,
              },
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr",
              },
            }}
          >
            <Box sx={{ gridArea: "nav" }}>
              <NavBar />
            </Box>
            <Box sx={{ gridArea: "main" }}>
              <Routes>
                <Route path="/study" element={<Home />}></Route>
                <Route path="/learn" element={<Learn />}></Route>
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
