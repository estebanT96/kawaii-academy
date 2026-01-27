import { Box, CardContent, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import RestartButton from "./RestartButton";
import SelectAgainButton from "./SelectAgainButton";

interface KanaChar {
  char: string;
  romaji: string;
  type: string;
  row: string;
}

interface Props {
  data: KanaChar[];
  onBackToMenu: () => void;
}

const StudyCardContent = ({ data, onBackToMenu }: Props) => {
  const [index, setIndex] = useState(0);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (index >= data.length) {
      const anchor = document.getElementById("scroll-anchor");
      if (anchor) {
        setTimeout(() => {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [index, data.length]);

  const handleInput = (character: string, romaji: string, input: string) => {
    console.log(character, romaji, input);
    if (index < data.length) {
      if (romaji === input) {
        setInputVal(input);

        setIndex((prevIndex) => prevIndex + 1);
        setTimeout(() => {
          setInputVal("");
        }, 150);
      } else {
        setInputVal(input);
      }
    }
  };
  const handleRestart = () => {
    setIndex(0);
    const anchor = document.getElementById("scroll-anchor");
    if (anchor) {
      setTimeout(() => {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  if (index >= data.length) {
    return (
      <CardContent sx={{ textAlign: "center", paddingTop: "30px" }}>
        <Typography sx={{ fontSize: { xs: "32px", md: "56px" } }}>
          Congratulations!
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <RestartButton onClick={handleRestart} />
          <SelectAgainButton onBackToMenu={onBackToMenu} />
        </Box>
      </CardContent>
    );
  }

  return (
    <CardContent
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography>How do you read this kana symbol?</Typography>
      <Typography boxShadow="1px solid black" variant="h1">
        {data[index].char}
      </Typography>
      <Box display="flex" sx={{ justifyContent: "center" }}>
        <TextField
          value={inputVal}
          size="small"
          hiddenLabel
          sx={{ input: { textAlign: "center" }, width: "60%" }}
          onChange={(e) =>
            handleInput(data[index].char, data[index].romaji, e.target.value)
          }
        ></TextField>
      </Box>
      {/* <Typography variant="h3">{data[index].romaji}</Typography> */}

      <Typography variant="h5" color="rgb(255, 35, 35)" marginTop="10px">
        [ {index}/{data.length} ]
      </Typography>
      <Typography variant="body2" color="rgb(145, 145, 145)" textAlign="center">
        Characters will automatically disappear if you answer correctly.
      </Typography>
    </CardContent>
  );
};

export default StudyCardContent;
