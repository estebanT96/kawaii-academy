import { ThemeProvider, CssBaseline, Box, Grid } from "@mui/material";
import { theme } from "./styles/styles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <NavBar />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
