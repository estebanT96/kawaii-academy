import { useState } from "react";
import { Container } from "@mui/material";
import { STUDY_CHAR } from "../data/testKana"; // Your Master List
import StudyCardContainer from "./ui/StudyCardContainer";
import StudyCardContent from "./StudyCardContent";
import StudySelection from "./StudySelection";

const StudyCard = () => {
  const uniqueRows = Array.from(new Set(STUDY_CHAR.map((c) => c.row)));
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [activeData, setActiveData] = useState(STUDY_CHAR);
  const [displayedChar, setDisplayedChar] = useState<typeof STUDY_CHAR>([]);

  const toggleRow = (row: string) => {
    const selectedNewChars = STUDY_CHAR.filter((char) => char.row === row);
    setDisplayedChar(selectedNewChars);
    console.log("You just clicked row:", row);
    console.log("Displaying ONLY these characters:", selectedNewChars);

    setSelectedRows((prev) => {
      const isAlreadySelected = prev.includes(row);

      if (isAlreadySelected) {
        return prev.filter((r) => r !== row);
      } else {
        return [...prev, row];
      }
    });
  };

  const handleStart = () => {
    const filtered = STUDY_CHAR.filter((char) =>
      selectedRows.includes(char.row),
    );
    setActiveData(filtered);
    setIsGameActive(true);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "30px 0" }}>
      <StudyCardContainer>
        {!isGameActive ? (
          <StudySelection
            allRows={uniqueRows}
            selectedRows={selectedRows}
            toggleRow={toggleRow}
            onStart={handleStart}
            displayedChars={displayedChar}
          />
        ) : (
          <StudyCardContent data={activeData} />
        )}
      </StudyCardContainer>
    </Container>
  );
};

export default StudyCard;
