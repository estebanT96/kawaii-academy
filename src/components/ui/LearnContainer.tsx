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
        background: "#f1d302",
      }}
    >
      {children}
    </Box>
  );
};

export default LearnContainer;
