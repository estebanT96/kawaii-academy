import { Box, styled } from "@mui/material";

const SymbolContainer = styled(Box)(() => ({
  padding: "0",
  fontFamily: "'Poppins', sans-serif",
  transition: "all ease 150ms",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#dedede",
    color: "rgb(255, 97, 35)",
    cursor: "pointer",
  },
}));

export default SymbolContainer;
