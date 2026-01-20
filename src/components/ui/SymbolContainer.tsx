import { Box, styled } from "@mui/material";

const SymbolContainer = styled(Box)(() => ({
  padding: "10px 0",
  fontFamily: "'Poppins', sans-serif",
  transition: "all ease 150ms",
  textAlign: "center",
  borderRadius: "5px",

  "&:hover": {
    backgroundColor: "#dedede",
    color: "rgb(255, 97, 35)",
    cursor: "pointer",
  },
}));

export default SymbolContainer;
