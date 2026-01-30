import { Box, List, ListItem, Typography } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
const HiraganaDescription = () => {
  return (
    <>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          sx={{
            textDecoration: "underline",
            marginRight: "20px",
            marginBottom: "15px",
            fontSize: { xs: "20px", md: "42px" },
          }}
        >
          Hiragana
        </Typography>
        <Typography
          variant="h5"
          color="rgb(160, 160, 160)"
          sx={{ fontSize: { xs: "14px", md: "20px" } }}
        >
          ひらがな
        </Typography>
      </Box>
      <Box sx={{ marginBottom: { xs: "10px", md: "30px" } }}>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>Hiragana</strong> is the foundation of Japanese, it is made up
          of 3 main categories (seion, dakuon and yoon) and contains 46 basic
          characters that represent every sound in the language.
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>Pro Tip: </strong>
          Some words have what is known as a long "o" and "e" sound.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          Take a look at the following words:{" "}
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong style={{ color: "rgb(8, 107, 255)" }}>
            1. a∘ri∘ga∘to∘u:
          </strong>{" "}
          Notice how this word ends with a "u"? This is what creates the long
          "o" sound.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          <strong style={{ color: "rgb(8, 107, 255)" }}>
            2. o∘o∘ki∘i [big]:
          </strong>{" "}
          This is an adjective, it means big; this word also contains a long
          "o", in this case it is made up of two "o" characters.
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>
            Why do some words use "u", and others "o" to create this long
            sound?{" "}
          </strong>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          Well, it all depends on the origin of the word! Generally on'yomi
          (Chinese-derived) readings use "ou" [おう], while kun'yomi (native
          Japanese) readings use "oo" [おお] but there are some exceptions
          (let's not worry about them now).
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>What about words with a long "e" sound? </strong>
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          Just like the long "o", the long "e" sound is usually created by
          adding a specific character after the "e" vowel. Most of the time, you
          will add an "i" to create that long sound, but occasionally you'll use
          another "e".
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          Take a look at the following words:{" "}
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong style={{ color: "rgb(8, 107, 255)" }}>
            1. se∘n∘se∘i [teacher]:
          </strong>
          Notice how this word ends with an "i"? Even though it is written as an
          "i", it combines with the previous syllable to create the long "e"
          sound.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          <strong style={{ color: "rgb(8, 107, 255)" }}>
            2. o∘ne∘e∘sa∘n [older sister]:
          </strong>{" "}
          This word also contains a long "e"; in this case, it is made up of two
          "e" characters.
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          <strong>
            Why do some words use "i", and others "e" to create this long
            sound?{" "}
          </strong>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "16px" }, marginBottom: "10px" }}
        >
          Well, it follows the same pattern as the "o" sound! Most on'yomi
          (Chinese-derived) readings use "ei" [えい], while certain kun'yomi
          (native Japanese) words use "ee" [ええ]. There are only a few common
          "ee" words to learn, so "ei" is much more frequent!
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          Now let's finally move on to the hiragana types!
        </Typography>

        <List>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />{" "}
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Seion (Basic Sounds): </strong>
              The 46 primary "clear sounds" of Japanese.
            </Typography>
          </ListItem>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Dakuon (Voiced Sounds): </strong>
              Characters modified with two quotation marks, called dakuten (゛)
              or a circle, called handakuten (゜) to change their sound (e.g.,
              "ka" becomes "ga", "ha" becomes "ba" or "pa").
            </Typography>
          </ListItem>
          <ListItem>
            <SunnyIcon
              sx={{
                fontSize: "18px",
                marginRight: "10px",
                color: "rgb(255, 79, 79)",
              }}
            />
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              <strong>Yoon (Combo Sounds): </strong>A combination of a character
              plus a small ya, yu, or yo. They blend together to make one smooth
              sound (e.g., き "ki" + ゃ "ya" = きゃ "kya").
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          You should learn these first, once you know Hiragana, you can
          pronounce any Japanese word.
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          Select a tab to switch between types (seion, dakuon and yoon), so you
          can get familiarized with every symbol.
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          That is all you need to know for now, you are ready to start learning!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "red",
            textAlign: "center",
            marginTop: "5px",
            fontWeight: "600",
          }}
        >
          [select a character from a table and it will be displayed along with
          its pronounciation]
        </Typography>
      </Box>
    </>
  );
};

export default HiraganaDescription;
