import { createTheme} from "@mui/material";

export const theme = createTheme({
  typography: {
    // This sets the font for EVERYTHING (body, buttons, inputs) by default
    fontFamily: "'Google Sans Flex', sans-serif",
    // Now we specifically override the headings to use the Cute font
    h1: { fontFamily: "'Noto Sans Japanese', sans-serif", fontSize:'132px', fontWeight:600 },
    h2: { fontFamily: "'Noto Sans Japanese', sans-serif" },
    h3: { fontFamily: "'Noto Sans Japanese', sans-serif" },
    h4: { fontFamily: "'Noto Sans Japanese', sans-serif" },
    h5: { fontFamily: "'Noto Sans Japanese', sans-serif" },
    h6: { fontFamily: "'Noto Sans Japanese', sans-serif" },
  },
  
});