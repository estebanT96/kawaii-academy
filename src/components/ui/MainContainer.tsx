import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        background: "#4797ed43", //color de fondo
        height: "85vh",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
