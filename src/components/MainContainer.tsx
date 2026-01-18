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
        bgcolor: "rgba(233, 110, 72, 0.7)",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
