import { KANA_CHAR } from "./kana";

export const seionHiraganaA = KANA_CHAR.filter(
  (item) => item.type === "seion-hiragana" && item.row === "a",
).map((character) => character.char);

// This table row will have 2 empty cells
const rawHiraganaI = KANA_CHAR.filter(
  (item) => item.type === "seion-hiragana" && item.row === "i",
).map((character) => character.char);
rawHiraganaI.splice(7, 0, " ");
rawHiraganaI.splice(9, 0, " ");
export const seionHiraganaI = rawHiraganaI;

const rawHiraganaU = KANA_CHAR.filter(
  (item) => item.type === "seion-hiragana" && item.row === "u",
).map((character) => character.char);
export const seionHiraganaU = rawHiraganaU;

export const seionHiraganaE = KANA_CHAR.filter(
  (item) => item.type === "seion-hiragana" && item.row === "e",
).map((character) => character.char);

export const seionHiraganaO = KANA_CHAR.filter(
  (item) => item.type === "seion-hiragana" && item.row === "o",
).map((character) => character.char);
