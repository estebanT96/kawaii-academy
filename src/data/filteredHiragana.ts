import { KANA_CHAR } from "./kana";

const getRow = (kanaType: string, vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === kanaType && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
  }));
};

const seionRowA = getRow("seion-hiragana", "a");
const seionRowI = getRow("seion-hiragana", "i");
const seionRowU = getRow("seion-hiragana", "u");
const seionRowE = getRow("seion-hiragana", "e");
const seionRowO = getRow("seion-hiragana", "o");
const emptySpace = { character: "", romaji: "" };
seionRowI.splice(7, 0, emptySpace);

const dakuonRowA = getRow("dakuon-hiragana", "a");
const dakuonRowI = getRow("dakuon-hiragana", "i");
const dakuonRowU = getRow("dakuon-hiragana", "u");
const dakuonRowE = getRow("dakuon-hiragana", "e");
const dakuonRowO = getRow("dakuon-hiragana", "o");

const yoonRowA = getRow("yoon-hiragana", "ya");
const yoonRowU = getRow("yoon-hiragana", "yu");
const yoonRowO = getRow("yoon-hiragana", "yo");

export const seionConsonants = [
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
export const dakuonConsonants = ["", "g", "z", "d", "b", "p"];
export const yoonConsonants = [
  "",
  "k",
  "s",
  "c",
  "n",
  "h",
  "m",
  "r",
  "g",
  "j",
  "d",
  "b",
  "p",
];

export const SEION_HIRAGANA_ROWS = [
  { vowel: "a", chars: seionRowA },
  { vowel: "i", chars: seionRowI },
  { vowel: "u", chars: seionRowU },
  { vowel: "e", chars: seionRowE },
  { vowel: "o", chars: seionRowO },
];

export const DAKUON_HIRAGANA_ROWS = [
  { vowel: "a", chars: dakuonRowA },
  { vowel: "i", chars: dakuonRowI },
  { vowel: "u", chars: dakuonRowU },
  { vowel: "e", chars: dakuonRowE },
  { vowel: "o", chars: dakuonRowO },
];

export const YOON_HIRAGANA_ROWS = [
  { vowel: "ya", chars: yoonRowA },
  { vowel: "yu", chars: yoonRowU },
  { vowel: "yo", chars: yoonRowO },
];
