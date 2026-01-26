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

  const toggleRow = (row: string) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter((r) => r !== row) : [...prev, row],
    );
  };

  const handleStart = () => {
    const filtered = STUDY_CHAR.filter((char) =>
      selectedRows.includes(char.row),
    );
    setActiveData(filtered);
    setIsGameActive(true);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "30px" }}>
      <StudyCardContainer>
        {!isGameActive ? (
          <StudySelection
            allRows={uniqueRows}
            selectedRows={selectedRows}
            toggleRow={toggleRow}
            onStart={handleStart}
          />
        ) : (
          <StudyCardContent data={activeData} />
        )}
      </StudyCardContainer>
    </Container>
  );
};

export default StudyCard;
