import { Box, Button, Typography } from "@mui/material";

interface Props {
  allRows: string[];
  selectedRows: string[];
  toggleRow: (row: string) => void;
  onStart: () => void;
}

const StudySelection = ({
  allRows,
  selectedRows,
  toggleRow,
  onStart,
}: Props) => {
  const getColor = (row: string) => {
    return row.startsWith("h") ? "rgb(19, 139, 194)" : "rgb(234, 58, 58)";
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <Typography
        sx={{ fontSize: { xs: "18px", md: "24px" }, fontWeight: "600" }}
      >
        Select Rows to Study
      </Typography>

      <Box display="flex" gap={3}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width={15}
            height={15}
            bgcolor="rgb(19, 139, 194)"
            borderRadius="50%"
          />
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "18px", md: "24px" } }}
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
            sx={{ fontSize: { xs: "18px", md: "24px" } }}
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
              onClick={() => toggleRow(row)}
              sx={{
                width: "50px",
                padding: "4px 4px",
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
                  transform: "translateY(-2px)",
                  boxShadow: `0px 4px 0px ${baseColor}`,
                  backgroundColor: isSelected ? baseColor : "rgba(0,0,0,0.05)",
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
          paddingX: 3,
          backgroundColor: "rgb(237, 207, 4)",
          transition: "all ease 200ms",
          color: "black",
          border: "1px solid black",
          boxShadow: "2px 2px 0px black",
          fontWeight: "500",

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
