import { Button } from "@mui/material";

interface Props {
  setIndex: (index: number) => void;
}

const RestartButton = ({ setIndex }: Props) => {
  return (
    <Button
      onClick={() => setIndex(0)}
      sx={{
        backgroundColor: "rgb(237, 207, 4)",
        transition: "all ease 200ms",
        color: "black",
        border: "1px solid black",
        boxShadow: "2px 2px 0px black",
        fontWeight: "500",
        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.1)",
          boxShadow: "3px 3px 0px black",
        },
        "&:active": {
          transform: "translate(1px, 1px)",
          boxShadow: "1px 1px 0px transparent ",
        },
      }}
    >
      Restart
    </Button>
  );
};

export default RestartButton;
