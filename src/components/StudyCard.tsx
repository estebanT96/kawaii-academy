import {
  Box,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

// import { STUDY_CHAR } from "../data/testKana";

const StudyCard = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ paddingTop: "50px" }}>
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
            height: "500px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography boxShadow="1px solid black" variant="h1">
              あ
            </Typography>
            <Box>
              <TextField
                size="small"
                hiddenLabel
                sx={{ input: { textAlign: "center" } }}
                variant="filled"
              ></TextField>
            </Box>
            <Typography boxShadow="1px solid black" variant="h3">
              a
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default StudyCard;
