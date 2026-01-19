import { Card } from "@mui/material";
import LearnContainer from "../components/LearnContainer";
import HiraganaTable from "../components/HiraganaTable";
import KatakanaTable from "../components/KatakanaTable";
import Kanji from "../components/Kanji";
import Romaji from "../components/Romaji";
import Furigana from "../components/Furigana";

const Learn = () => {
  return (
    <LearnContainer>
      <Card sx={{
        padding: "15px",
        maxWidth: "1400px",
        margin: "0 auto" }}>
        <HiraganaTable />
        <KatakanaTable />
        <Kanji />
        <Romaji />
        <Furigana />
      </Card>
    </LearnContainer>
  );
};

export default Learn;
