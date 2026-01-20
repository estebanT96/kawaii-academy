import { KANA_CHAR } from "./kana";

const getRow = (vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === "seion-hiragana" && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
  }));
};

const rowA = getRow("a");
const rowU = getRow("u");
const rowE = getRow("e");
const rowO = getRow("o");
const rowI = getRow("i");

const emptySpace = { character: "", romaji: "" };

rowI.splice(7, 0, emptySpace);

export const HIRAGANA_ROWS = [
  { vowel: "a", chars: rowA },
  { vowel: "i", chars: rowI },
  { vowel: "u", chars: rowU },
  { vowel: "e", chars: rowE },
  { vowel: "o", chars: rowO },
];

export const consonants = [
  "",
  "",
  "k",
  "s",
  "t",
  "n",
  "h",
  "m",
  "y",
  "r",
  "w",
  "n",
];
