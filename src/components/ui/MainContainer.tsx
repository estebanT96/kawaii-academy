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
        height: "87vh",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
