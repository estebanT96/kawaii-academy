import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { STUDY_CHAR } from "../data/testKana"; // Your Master List
import StudyCardContent from "./StudyCardContent";
import StudySelection from "./StudySelection";

const StudyCard = () => {
  const uniqueRows = Array.from(new Set(STUDY_CHAR.map((c) => c.row)));
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [activeData, setActiveData] = useState(STUDY_CHAR);
  const [displayedChar, setDisplayedChar] = useState<typeof STUDY_CHAR>([]);

  const shuffleArray = <T,>(array: T[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const toggleRow = (row: string) => {
    const selectedNewChars = STUDY_CHAR.filter((char) => char.row === row);
    setDisplayedChar(selectedNewChars);

    setSelectedRows((prev) => {
      const isAlreadySelected = prev.includes(row);

      if (isAlreadySelected) {
        return prev.filter((r) => r !== row);
      } else {
        return [...prev, row];
      }
    });
  };

  const performScroll = () => {
    const anchor = document.getElementById("scroll-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      performScroll();
    }, 100);
    return () => clearTimeout(timer);
  }, [isGameActive]);

  const handleStart = () => {
    const filtered = STUDY_CHAR.filter((char) =>
      selectedRows.includes(char.row),
    );
    const randomizedData = shuffleArray(filtered);
    setActiveData(randomizedData);
    setIsGameActive(true);
  };
  return (
    <Container sx={{ padding: "30px 0", background: "rgb(255, 255, 255)" }}>
      <Box id="scroll-anchor" sx={{ top: 0, left: 0 }} />
      {!isGameActive ? (
        <StudySelection
          allRows={uniqueRows}
          selectedRows={selectedRows}
          toggleRow={toggleRow}
          onStart={handleStart}
          displayedChars={displayedChar}
        />
      ) : (
        <StudyCardContent
          data={activeData}
          onBackToMenu={() => setIsGameActive(false)}
        />
      )}
    </Container>
  );
};

export default StudyCard;
