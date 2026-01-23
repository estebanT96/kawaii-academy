import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LearnContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        background: "#4797ed43", //color de fondo
        padding:"20px 0"
      }}
    >
      {children}
    </Box>
  );
};

export default LearnContainer;
