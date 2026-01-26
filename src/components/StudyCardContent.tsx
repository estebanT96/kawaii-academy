import { Box, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import RestartButton from "./RestartButton";

interface KanaChar {
  char: string;
  romaji: string;
  type: string;
  row: string;
}

interface Props {
  data: KanaChar[];
}

const StudyCardContent = ({ data }: Props) => {
  const [index, setIndex] = useState(0);
  const [inputVal, setInputVal] = useState("");

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

  if (index >= data.length) {
    return (
      <CardContent sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: { xs: "32px", md: "56px" } }}>
          Congratulations!
        </Typography>
        <RestartButton setIndex={setIndex} />
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
