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
      <Container maxWidth="xs" sx={{ paddingTop: "100px" }}>
        <Card
          variant="outlined"
          sx={{ padding: "20px", alignItems: "center", borderRadius: "5px" }}
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
            <Box width="40%">
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
