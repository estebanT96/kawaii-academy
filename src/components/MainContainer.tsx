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
        bgcolor: "rgb(255, 253, 247)",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
