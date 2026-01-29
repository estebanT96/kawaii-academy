import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./styles/styles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollTop />
          <Box
            display="grid"
            sx={{
              minHeight: "100vh",
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
            <Box
              sx={{
                gridArea: "nav",
                position: "sticky",
                top: 0,
                zIndex: 1100,
              }}
            >
              <NavBar />
            </Box>
            <Box
              sx={{
                gridArea: "main",
                background: "#4797ed3a",
                overflowX: "hidden",
                minWidth: 0,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/learn" element={<Learn />}></Route>
              </Routes>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
