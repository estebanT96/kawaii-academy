import { Box, Typography, Link } from "@mui/material";
import WordColumn from "./WordColumn";
import {
  hiraganaTableHeader,
  hiraganaWords,
  katakanaTableHeader,
  katakanaWords,
} from "../data/words";
import links from "../data/links";
import { Link as RouterLink } from "react-router-dom";

const WordLearnSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      padding="15px"
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        paddingTop: "15px",

        paddingBottom: "30px",
      }}
    >
      <Box margin="15px">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            fontSize: { xs: "20px", md: "42px" },
          }}
        >
          Word Glossary
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "12px", md: "14px" }, paddingTop: "10px" }}
        >
          Practice your hiragana and katakana reading skills with the following
          words.
        </Typography>
      </Box>
      <Box
        display="flex"
        width={{ xs: "auto", md: "90%" }}
        justifyContent="space-between"
        margin="0 auto"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <WordColumn
          headers={[hiraganaTableHeader]}
          words={hiraganaWords}
        ></WordColumn>
        <WordColumn
          headers={[katakanaTableHeader]}
          words={katakanaWords}
        ></WordColumn>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            marginRight: { xs: "0", md: "10px" },
          }}
        >
          Ready to test what you learned? Give it a shot!{" "}
        </Typography>{" "}
        <Link
          underline="none"
          component={RouterLink}
          key={links[1].id}
          to={links[1].path}
        >
          <Box
            padding="2px 5px"
            borderRadius="5px"
            sx={{
              backgroundColor: links[1].color,
              transition: "all ease 200ms",
              border: links[1].border,
              boxShadow: links[1].boxShadow,
              "&:hover": {
                cursor: "pointer",
                filter: "brightness(1.1)",
                boxShadow: links[1]["&:hover"],
              },
              "&:active": {
                transform: "translate(1px, 1px)",
                boxShadow: "1px 1px 0px transparent ",
              },
            }}
          >
            <Typography color="black" fontWeight="500" fontSize="12px">
              {links[1].tag}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default WordLearnSection;
