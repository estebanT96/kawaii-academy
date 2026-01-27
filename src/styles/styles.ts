import { createTheme } from "@mui/material";
import "@mui/material/styles";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
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
    body2: { fontFamily: "'Poppins', sans-serif" },
    body3: {
      fontFamily: "'Noto Sans Japanese', sans-serif",
      fontSize: "60px",
      fontWeight: 600,
    },
  },
});
