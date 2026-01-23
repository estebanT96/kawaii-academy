export interface KanaChar {
    char: string,
    romaji: string;
    type: "hiragana" | "katakana",
    row: string;
}

export const STUDY_CHAR: KanaChar[] = [
  { char: "あ", romaji: "a", type: "hiragana", row: "a" },
  { char: "い", romaji: "i", type: "hiragana", row: "a" },
  { char: "う", romaji: "u", type: "hiragana", row: "a" },
  { char: "え", romaji: "e", type: "hiragana", row: "a" },
  { char: "お", romaji: "o", type: "hiragana", row: "a" },

  
];

console.log(STUDY_CHAR);
