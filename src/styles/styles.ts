import { createTheme} from "@mui/material";

export const theme = createTheme({
  typography: {
    // This sets the font for EVERYTHING (body, buttons, inputs) by default
    fontFamily: "'Google Sans Flex', sans-serif",
    // Now we specifically override the headings to use the Cute font
    h1: { fontFamily: "'Zen Maru Gothic', sans-serif" },
    h2: { fontFamily: "'Zen Maru Gothic', sans-serif" },
    h3: { fontFamily: "'Zen Maru Gothic', sans-serif" },
    h4: { fontFamily: "'Zen Maru Gothic', sans-serif" },
    h5: { fontFamily: "'Zen Maru Gothic', sans-serif" },
    h6: { fontFamily: "'Zen Maru Gothic', sans-serif" },
  },
  
});