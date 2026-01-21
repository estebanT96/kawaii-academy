import { KANA_CHAR } from "./kana";

const getRow = (kanaType: string, vowel: string) => {
  return KANA_CHAR.filter(
    (item) => item.type === kanaType && item.row === vowel,
  ).map((item) => ({
    character: item.char,
    romaji: item.romaji,
    row: item.row
  }));
};



export const seionConsonants = ["","","k","s","t","n","h","m","y","r","w","n",];

const seionRowA = getRow("seion-katakana", "a");
const seionRowI = getRow("seion-katakana", "i");
const seionRowU = getRow("seion-katakana", "u");
const seionRowE = getRow("seion-katakana", "e");
const seionRowO = getRow("seion-katakana", "o");
const emptySpace = { character: "", romaji: "ナニ。。。", row:"" };
seionRowI.splice(7, 0, emptySpace);

export const SEION_KATAKANA_ROWS = [
  { vowel: "a", chars: seionRowA },
  { vowel: "i", chars: seionRowI },
  { vowel: "u", chars: seionRowU },
  { vowel: "e", chars: seionRowE },
  { vowel: "o", chars: seionRowO },
];


export const dakuonConsonants = ["", "g", "z", "d", "b", "p"];


const dakuonRowA = getRow("dakuon-katakana", "a");
const dakuonRowI = getRow("dakuon-katakana", "i");
const dakuonRowU = getRow("dakuon-katakana", "u");
const dakuonRowE = getRow("dakuon-katakana", "e");
const dakuonRowO = getRow("dakuon-katakana", "o");


export const DAKUON_KATAKANA_ROWS = [
  { vowel: "a", chars: dakuonRowA },
  { vowel: "i", chars: dakuonRowI },
  { vowel: "u", chars: dakuonRowU },
  { vowel: "e", chars: dakuonRowE },
  { vowel: "o", chars: dakuonRowO },
];


export const yoonConsonants = ["","k","s","c","n","h","m","r","g","j","d","b","p"];
export const yoonRowHeader = [" ", "ya", "yu", "yo"];


const yoonRowKi = getRow("yoon-katakana", "ki");
const yoonRowShi = getRow("yoon-katakana", "shi");
const yoonRowChi = getRow("yoon-katakana", "chi");
const yoonRowNi = getRow("yoon-katakana", "ni");
const yoonRowHi = getRow("yoon-katakana", "hi");
const yoonRowMi = getRow("yoon-katakana", "mi");
const yoonRowRi = getRow("yoon-katakana", "ri");
const yoonRowGi = getRow("yoon-katakana", "gi");
const yoonRowJi = getRow("yoon-katakana", "ji");
const yoonRowDi = getRow("yoon-katakana", "di");
const yoonRowBi = getRow("yoon-katakana", "bi");
const yoonRowPi = getRow("yoon-katakana", "pi");


export const YOON_KATAKANA_ROWS = [
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
