import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Introduction = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ marginBottom: "20px" }}
    >
      <Typography
        variant="h3"
        sx={{
          textDecoration: "underline",
          marginRight: "20px",
          marginBottom: "15px",
          fontSize: { xs: "20px", md: "42px" },
        }}
      >
        Introduction
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        Japanese has three writing systems:
      </Typography>
      <Typography
        fontWeight="600"
        color="rgb(8, 107, 255)"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        1. Hiragana
      </Typography>
      <Typography
        fontWeight="600"
        color="rgb(255, 62, 62)"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        2. Katakana
      </Typography>
      <Typography
        fontWeight="600"
        color="rgb(223, 163, 0)"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        3. Kanji
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        For now, let's just focus on the first two, we will leave{" "}
        <strong style={{ fontWeight: "600", color: "rgb(223, 163, 0)" }}>
          Kanji
        </strong>{" "}
        for another lesson.
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        Hiragana and Katakana are the ABC's of the language, we will focus on
        mastering these phonetic characters first to build your foundation. When
        it comes to these two writing systems, each symbol represents one
        syllabic sound, and you make up words by adding them up.
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
        marginTop="10px"
      >
        Look at the following example:
      </Typography>
      <Box margin="0 auto" marginY="30px">
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
        >
          <Typography variant="h3">あ</Typography>
          <ArrowRightAltIcon fontSize="large" />
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "36px" } }}
            color="rgb(255, 62, 62)"
          >
            [a]
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
        >
          <Typography variant="h3">り</Typography>
          <ArrowRightAltIcon fontSize="large" />
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "36px" } }}
            color="rgb(255, 62, 62)"
          >
            [ri]
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
        >
          <Typography variant="h3">が</Typography>
          <ArrowRightAltIcon fontSize="large" />
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "36px" } }}
            color="rgb(255, 62, 62)"
          >
            [ga]
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
        >
          <Typography variant="h3">と</Typography>
          <ArrowRightAltIcon fontSize="large" />
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "36px" } }}
            color="rgb(255, 62, 62)"
          >
            [to]
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
        >
          <Typography variant="h3">う</Typography>
          <ArrowRightAltIcon fontSize="large" />
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "28px", md: "36px" } }}
            color="rgb(255, 62, 62)"
          >
            [u]
          </Typography>
        </Box>
      </Box>
      <Typography
        marginBottom="10px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        Now you know how to write{" "}
        <strong style={{ fontWeight: "600", color: "rgb(255, 62, 62)" }}>
          "arigatou"
        </strong>
        , which means thank you in Japanese!{" "}
        <span style={{ color: "gray", fontSize: "13px", fontWeight: "600" }}>
          You might have already heard this word before.
        </span>
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        There are 5 vowels in the Japanese language:{" "}
      </Typography>
      <Typography margin="0 auto" sx={{ fontSize: { xs: "16px", md: "18px" } }}>
        <strong style={{ fontWeight: "600", color: "rgb(255, 62, 62)" }}>
          {" "}
          [a, i, u, e, o]{" "}
        </strong>{" "}
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        And 15 main consonants:
      </Typography>
      <Typography
        marginBottom="10px"
        marginX="auto"
        sx={{ fontSize: { xs: "16px", md: "18px" } }}
      >
        <strong style={{ fontWeight: "600", color: "rgb(8, 107, 255)" }}>
          [k, s, t, n, h, m, y, r, w, g, z, d, b, p]
        </strong>
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        The letter "n" is the only consonant that has a symbol for itself [ん]
        (look for it in the seion kana tables).
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        Each vowel has its own hiragana and katakana character, but
        consonants are always accompanied by a vowel (except for ん).
      </Typography>
      <Typography
        marginTop="10px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        Look at the following examples:
      </Typography>
      <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box
          margin="0 auto"
          marginY="30px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "22px", md: "30px" },
            }}
            textAlign="center"
            marginBottom="10px"
          >
            Vowels:
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              a
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              あ [a]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              i
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              い [i]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              u
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              う [u]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "28px", md: "26px" } }}
            >
              e
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              え [e]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              o
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              お [o]
            </Typography>
          </Box>
        </Box>
        <Box
          margin="0 auto"
          marginY="30px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "22px", md: "30px" },
            }}
            textAlign="center"
            marginBottom="10px"
          >
            Consonant [k] + vowels:
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              k + a
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              か [ka]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              k + i
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              き [ki]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              k + u
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              く [ku]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              k + e
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              け [ke]
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "7px" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
            >
              k + o
            </Typography>
            <ArrowRightAltIcon fontSize="large" />
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "22px", md: "26px" } }}
              color="rgb(255, 62, 62)"
            >
              こ [ko]
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        marginBottom="20px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        In the example above, you can visualize how each hiragana symbol looks
        when you combine the [k] consonant with every vowel. The same concept
        applies to Katakana, where symbols represent the exact same sounds as
        hiragana, but the main visible difference lies in how they look.
      </Typography>
      <Typography
        fontWeight="700"
        marginBottom="10px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        Before we move on, you might be wondering what the difference between
        Hiragana and Katakana is...
      </Typography>

      <Typography
        marginBottom="5px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        <strong>Hiragana:</strong> The 46 primary sounds of Japanese, its
        calligraphy and symbology is derived of more complex symbols (Kanji),
        which were later converted into conceptual and mono-syllabic symbols.
      </Typography>

      <Typography
        marginBottom="10px"
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        <strong>Katakana:</strong> It is primarily used for foreign loanwords
        (like 'coffee' or 'computer'), foreign names, and onomatopoeia (sound
        effects). Katakana represents the exact same sounds as Hiragana but uses
        sharper, more angular characters.{" "}
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        Below, you can find the tables for Hiragana and Katakana
        characters.{" "}
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        Select a tab to switch between types (seion, dakuon and yoon), so you
        can get familiarized with every symbol.
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
        That is all you need to know for now, you are ready to start learning!
      </Typography>
      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}></Typography>
    </Box>
  );
};

export default Introduction;
