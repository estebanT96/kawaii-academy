import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    // This sets the font for EVERYTHING (body, buttons, inputs) by default
    fontFamily: "'Google Sans Flex', sans-serif",
    // Now we specifically override the headings to use the Cute font
    h1: {
      fontFamily: "'Noto Sans Japanese', sans-serif",
      fontSize: "132px",
      fontWeight: 600,
    },
    h2: { fontFamily: "'Google Sans Flex', sans-serif", fontWeight: 600 },
    h3: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Noto Sans Japanese', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Google Sans Flex', sans-serif" },
    body1: { fontFamily: "'Poppins', sans-serif" },
  },
});
