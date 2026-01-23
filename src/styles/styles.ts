import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    // This sets the font for EVERYTHING (body, buttons, inputs) by default
    fontFamily: "'Google Sans Flex', sans-serif",
    // Now we specifically override the headings to use the Cute font
    h1: {
      fontFamily: "'Noto Sans Japanese', sans-serif",
      fontSize: "100px",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Noto Sans Japanese', sans-serif",
      fontWeight: 700,
      fontSize: "70px",
    },
    h3: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h4: {
      fontFamily: "'Noto Sans Japanese', sans-serif",
      fontWeight: 600,
      fontSize: "28px",
    },
    h5: { fontFamily: "'Noto Sans Japanese', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Poppins', sans-serif", fontSize: "16px" },
    body1: { fontFamily: "'Poppins', sans-serif" },
    body2: { fontFamily: "'Google Sans Flex', sans-serif" },
  },
});
