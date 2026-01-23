import { KANA_CHAR } from "./kana";

const getRow = (kanaType: string, vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === kanaType && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
    row: item.row,
  }));
};

export const seionConsonants = [
  " ",
  " ",
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

const seionRowA = getRow("seion-hiragana", "a");
const seionRowI = getRow("seion-hiragana", "i");
const seionRowU = getRow("seion-hiragana", "u");
const seionRowE = getRow("seion-hiragana", "e");
const seionRowO = getRow("seion-hiragana", "o");
const emptySpace = { character: "", romaji: "なに。。。", row: "" };
seionRowI.splice(7, 0, emptySpace);

export const SEION_HIRAGANA_ROWS = [
  { vowel: "a", chars: seionRowA },
  { vowel: "i", chars: seionRowI },
  { vowel: "u", chars: seionRowU },
  { vowel: "e", chars: seionRowE },
  { vowel: "o", chars: seionRowO },
];

export const dakuonConsonants = ["", "g", "z", "d", "b", "p"];

const dakuonRowA = getRow("dakuon-hiragana", "a");
const dakuonRowI = getRow("dakuon-hiragana", "i");
const dakuonRowU = getRow("dakuon-hiragana", "u");
const dakuonRowE = getRow("dakuon-hiragana", "e");
const dakuonRowO = getRow("dakuon-hiragana", "o");

export const DAKUON_HIRAGANA_ROWS = [
  { vowel: "a", chars: dakuonRowA },
  { vowel: "i", chars: dakuonRowI },
  { vowel: "u", chars: dakuonRowU },
  { vowel: "e", chars: dakuonRowE },
  { vowel: "o", chars: dakuonRowO },
];

export const yoonConsonants = [
  " ",
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
export const yoonRowHeader = [" ", "ya", "yu", "yo"];

const yoonRowKi = getRow("yoon-hiragana", "ki");
const yoonRowShi = getRow("yoon-hiragana", "shi");
const yoonRowChi = getRow("yoon-hiragana", "chi");
const yoonRowNi = getRow("yoon-hiragana", "ni");
const yoonRowHi = getRow("yoon-hiragana", "hi");
const yoonRowMi = getRow("yoon-hiragana", "mi");
const yoonRowRi = getRow("yoon-hiragana", "ri");
const yoonRowGi = getRow("yoon-hiragana", "gi");
const yoonRowJi = getRow("yoon-hiragana", "ji");
const yoonRowDi = getRow("yoon-hiragana", "di");
const yoonRowBi = getRow("yoon-hiragana", "bi");
const yoonRowPi = getRow("yoon-hiragana", "pi");

export const YOON_HIRAGANA_ROWS = [
  { rowSyllable: "ki", chars: yoonRowKi },
  { rowSyllable: "shi", chars: yoonRowShi },
  { rowSyllable: "chi", chars: yoonRowChi },
  { rowSyllable: "ni", chars: yoonRowNi },
  { rowSyllable: "hi", chars: yoonRowHi },
  { rowSyllable: "mi", chars: yoonRowMi },
  { rowSyllable: "ri", chars: yoonRowRi },
  { rowSyllable: "gi", chars: yoonRowGi },
  { rowSyllable: "ji", chars: yoonRowJi },
  { rowSyllable: "di", chars: yoonRowDi },
  { rowSyllable: "bi", chars: yoonRowBi },
  { rowSyllable: "pi", chars: yoonRowPi },
];

