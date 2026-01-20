import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LearnContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        padding: "15px",
        margin: "0 auto",
        background: "rgb(254, 251, 244)",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default LearnContainer;
