import { KANA_CHAR } from "./kana";

const getRow = (kanaType: string, vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === kanaType && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
  }));
};

export const seionConsonants = [" "," ","k","s","t","n","h","m","y","r","w","n"];
export const dakuonConsonants = ["g", "z", "d", "b", "p"];

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

const yoonRowA = getRow("yoon-hiragana", "a");
const yoonRowU = getRow("yoon-hiragana", "u");
const yoonRowO = getRow("yoon-hiragana", "o");

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
  { vowel: "a", chars: yoonRowA },
  { vowel: "u", chars: yoonRowU },
  { vowel: "o", chars: yoonRowO },
];
