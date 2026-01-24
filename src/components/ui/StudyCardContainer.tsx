import { Card } from "@mui/material";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StudyCardContainer = ({ children }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        border: "1px solid rgb(0, 95, 164)",
        boxShadow: "5px 5px 0px rgb(0, 95, 164)",
        height: "auto",
      }}
    >
      {children}
    </Card>
  );
};

export default StudyCardContainer;
