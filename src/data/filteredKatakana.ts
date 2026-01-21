import { KANA_CHAR } from "./kana";

const getRow = (kanaType: string, vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === kanaType && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
  }));
};

const seionRowA = getRow("seion-katakana", "a");
const seionRowI = getRow("seion-katakana", "i");
const seionRowU = getRow("seion-katakana", "u");
const seionRowE = getRow("seion-katakana", "e");
const seionRowO = getRow("seion-katakana", "o");
const emptySpace = { character: "", romaji: "ナニ。。。" };
seionRowI.splice(7, 0, emptySpace);

const dakuonRowA = getRow("dakuon-katakana", "a");
const dakuonRowI = getRow("dakuon-katakana", "i");
const dakuonRowU = getRow("dakuon-katakana", "u");
const dakuonRowE = getRow("dakuon-katakana", "e");
const dakuonRowO = getRow("dakuon-katakana", "o");

const yoonRowA = getRow("yoon-katakana", "ya");
const yoonRowU = getRow("yoon-katakana", "yu");
const yoonRowO = getRow("yoon-katakana", "yo");

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

export const SEION_KATAKANA_ROWS = [
  { vowel: "a", chars: seionRowA },
  { vowel: "i", chars: seionRowI },
  { vowel: "u", chars: seionRowU },
  { vowel: "e", chars: seionRowE },
  { vowel: "o", chars: seionRowO },
];

export const DAKUON_KATAKANA_ROWS = [
  { vowel: "a", chars: dakuonRowA },
  { vowel: "i", chars: dakuonRowI },
  { vowel: "u", chars: dakuonRowU },
  { vowel: "e", chars: dakuonRowE },
  { vowel: "o", chars: dakuonRowO },
];

export const YOON_KATAKANA_ROWS = [
  { vowel: "ya", chars: yoonRowA },
  { vowel: "yu", chars: yoonRowU },
  { vowel: "yo", chars: yoonRowO },
];
