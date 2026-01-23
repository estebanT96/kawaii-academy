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
        background: "rgb(255, 252, 242)", //color de fondo
      }}
    >
      {children}
    </Box>
  );
};

export default LearnContainer;
