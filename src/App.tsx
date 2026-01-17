import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
