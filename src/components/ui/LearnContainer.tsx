import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LearnContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        marginBottom: "50px",
      }}
    >
      {children}
    </Box>
  );
};

export default LearnContainer;
