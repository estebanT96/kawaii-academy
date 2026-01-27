import { Box, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type KanaChar = {
  char: string;
  romaji: string;
  row: string;
};

interface Props {
  allRows: string[];
  selectedRows: string[];
  displayedChars: KanaChar[];
  toggleRow: (row: string) => void;
  onStart: () => void;
}

const StudySelection = ({
  allRows,
  selectedRows,
  displayedChars,
  toggleRow,
  onStart,
}: Props) => {
  const getColor = (row: string) => {
    return row.startsWith("h") ? "rgb(19, 139, 194)" : "rgb(234, 58, 58)";
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Box paddingX="20px">
          <Typography
            sx={{ fontSize: { xs: "18px", md: "24px" } }}
            fontWeight="bold"
            color="rgb(0, 95, 164)"
          >
            New to Japanese?
          </Typography>

          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            To start learning, go to our{" "}
            <Link
              component={RouterLink}
              to="/learn"
              sx={{
                color: "rgb(223, 163, 0)",
                fontWeight: "600",
                "&:hover": {
                  filter: "brightness(130%)",
                },
              }}
            >
              Learn
            </Link>{" "}
            page.
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            When you feel ready, you can come back to this page to quiz your
            kana skills.
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography
            sx={{ fontSize: { xs: "18px", md: "24px" }, marginTop: "10px" }}
            fontWeight="bold"
            color="rgb(0, 95, 164)"
          >
            Already know your Kana?
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            This is a Flashcard Game. You will see a character (like あ) and
            type its sound (like "a").
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
            Choose specific rows below to create a custom quiz. <br />
          </Typography>
        </Box>
      </Box>
      <Box
        height="1px"
        width="70%"
        marginY="10px"
        sx={{
          backgroundColor: "rgb(198, 198, 198)",
        }}
      ></Box>
      <Typography fontSize="18px" fontWeight="bold">
        Select Rows to Study
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>
          You selected:
        </Typography>
        <Box display="flex">
          {displayedChars.map((item) => (
            <Typography
              variant="h6"
              padding="5px"
              color="rgb(156, 156, 156)"
              fontWeight="600"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              [{item.char}]
            </Typography>
          ))}
        </Box>
      </Box>

      <Box display="flex" gap={3} marginBottom="10px">
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width={15}
            height={15}
            bgcolor="rgb(19, 139, 194)"
            borderRadius="50%"
          />
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "14px", md: "18px" } }}
          >
            Hiragana
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width={15}
            height={15}
            bgcolor="rgb(234, 58, 58)"
            borderRadius="50%"
          />
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "14px", md: "18px" } }}
          >
            Katakana
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {allRows.map((row) => {
          const isSelected = selectedRows.includes(row);
          const baseColor = getColor(row);

          return (
            <Box
              key={row}
              onClick={() => {
                toggleRow(row);
                console.log(row);
              }}
              sx={{
                width: "50px",
                padding: "2px 2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: `2px solid ${baseColor}`,
                backgroundColor: isSelected ? baseColor : "transparent",
                color: isSelected ? "white" : baseColor,

                "&:hover": {
                  backgroundColor: isSelected
                    ? baseColor
                    : "rgba(0, 0, 0, 0.15)",
                },

                "&:active": {
                  transform: "translateY(0px)",
                  boxShadow: "none",
                },
              }}
            >
              <Typography
                fontWeight="bold"
                sx={{ fontSize: { xs: "12px", md: "16px" } }}
              >
                {row.replace(/^[hk]-/, "")}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Button
        disabled={selectedRows.length === 0}
        onClick={onStart}
        sx={{
          marginTop: 1,
          backgroundColor: "rgb(237, 207, 4)",
          transition: "all ease 200ms",
          color: "black",
          border: "1px solid black",
          boxShadow: "2px 2px 0px black",
          fontWeight: "500",
          textTransform: "none",
          fontFamily: "Poppins",

          "&:hover": {
            backgroundColor: "rgb(237, 207, 4)",
            cursor: "pointer",
            filter: "brightness(1.1)",
            boxShadow: "3px 3px 0px black",
          },

          "&:active": {
            transform: "translate(1px, 1px)",
            boxShadow: "1px 1px 0px transparent",
          },
          "&:disabled": {
            backgroundColor: "rgba(0,0,0,0.12)",
            color: "rgba(0,0,0,0.26)",
            boxShadow: "none",
            border: "1px solid transparent",
          },
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default StudySelection;
