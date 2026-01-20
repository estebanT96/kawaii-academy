export interface KanaChar {
  char: string;
  romaji: string;
  type: "seion-hiragana" | "dakuon-hiragana" | "yoon-hiragana";
  row: string;
}

export interface VowelTableSymbols {
  id: number;
  vowel: string;
}

export const KANA_CHAR: KanaChar[] = [
  { char: "あ", romaji: "a", type: "seion-hiragana", row: "a" },
  { char: "か", romaji: "ka", type: "seion-hiragana", row: "a" },
  { char: "さ", romaji: "sa", type: "seion-hiragana", row: "a" },
  { char: "た", romaji: "ta", type: "seion-hiragana", row: "a" },
  { char: "な", romaji: "na", type: "seion-hiragana", row: "a" },
  { char: "は", romaji: "ha", type: "seion-hiragana", row: "a" },
  { char: "ま", romaji: "ma", type: "seion-hiragana", row: "a" },
  { char: "や", romaji: "ya", type: "seion-hiragana", row: "a" },
  { char: "ら", romaji: "ra", type: "seion-hiragana", row: "a" },
  { char: "わ", romaji: "wa", type: "seion-hiragana", row: "a" },
  { char: "ん", romaji: "n", type: "seion-hiragana", row: "a" },

  { char: "い", romaji: "i", type: "seion-hiragana", row: "i" },
  { char: "き", romaji: "ki", type: "seion-hiragana", row: "i" },
  { char: "し", romaji: "shi", type: "seion-hiragana", row: "i" },
  { char: "ち", romaji: "chi", type: "seion-hiragana", row: "i" },
  { char: "に", romaji: "ni", type: "seion-hiragana", row: "i" },
  { char: "ひ", romaji: "hi", type: "seion-hiragana", row: "i" },
  { char: "み", romaji: "mi", type: "seion-hiragana", row: "i" },
  { char: "り", romaji: "ri", type: "seion-hiragana", row: "i" },

  { char: "う", romaji: "u", type: "seion-hiragana", row: "u" },
  { char: "く", romaji: "ku", type: "seion-hiragana", row: "u" },
  { char: "す", romaji: "su", type: "seion-hiragana", row: "u" },
  { char: "つ", romaji: "tsu", type: "seion-hiragana", row: "u" },
  { char: "ぬ", romaji: "nu", type: "seion-hiragana", row: "u" },
  { char: "ふ", romaji: "fu", type: "seion-hiragana", row: "u" },
  { char: "む", romaji: "mu", type: "seion-hiragana", row: "u" },
  { char: "ゆ", romaji: "yu", type: "seion-hiragana", row: "u" },
  { char: "る", romaji: "ru", type: "seion-hiragana", row: "u" },

  { char: "え", romaji: "e", type: "seion-hiragana", row: "e" },
  { char: "け", romaji: "ke", type: "seion-hiragana", row: "e" },
  { char: "せ", romaji: "se", type: "seion-hiragana", row: "e" },
  { char: "て", romaji: "te", type: "seion-hiragana", row: "e" },
  { char: "ね", romaji: "ne", type: "seion-hiragana", row: "e" },
  { char: "へ", romaji: "he", type: "seion-hiragana", row: "e" },
  { char: "め", romaji: "me", type: "seion-hiragana", row: "e" },
  { char: "れ", romaji: "re", type: "seion-hiragana", row: "e" },

  { char: "お", romaji: "o", type: "seion-hiragana", row: "o" },
  { char: "こ", romaji: "ko", type: "seion-hiragana", row: "o" },
  { char: "そ", romaji: "so", type: "seion-hiragana", row: "o" },
  { char: "と", romaji: "to", type: "seion-hiragana", row: "o" },
  { char: "の", romaji: "no", type: "seion-hiragana", row: "o" },
  { char: "ほ", romaji: "ho", type: "seion-hiragana", row: "o" },
  { char: "も", romaji: "mo", type: "seion-hiragana", row: "o" },
  { char: "よ", romaji: "yo", type: "seion-hiragana", row: "o" },
  { char: "ろ", romaji: "ro", type: "seion-hiragana", row: "o" },
  { char: "を", romaji: "wo", type: "seion-hiragana", row: "o" },

  { char: "が", romaji: "ga", type: "dakuon-hiragana", row: "a" },
  { char: "ざ", romaji: "za", type: "dakuon-hiragana", row: "a" },
  { char: "だ", romaji: "da", type: "dakuon-hiragana", row: "a" },
  { char: "ば", romaji: "ba", type: "dakuon-hiragana", row: "a" },
  { char: "ぱ", romaji: "pa", type: "dakuon-hiragana", row: "a" },

  { char: "ぎ", romaji: "gi", type: "dakuon-hiragana", row: "i" },
  { char: "じ", romaji: "ji", type: "dakuon-hiragana", row: "i" },
  { char: "ぢ", romaji: "di", type: "dakuon-hiragana", row: "i" },
  { char: "び", romaji: "bi", type: "dakuon-hiragana", row: "i" },
  { char: "ぴ", romaji: "pi", type: "dakuon-hiragana", row: "i" },

  { char: "ぐ", romaji: "gu", type: "dakuon-hiragana", row: "u" },
  { char: "ず", romaji: "zu", type: "dakuon-hiragana", row: "u" },
  { char: "づ", romaji: "dzu", type: "dakuon-hiragana", row: "u" },
  { char: "ぶ", romaji: "bu", type: "dakuon-hiragana", row: "u" },
  { char: "ぷ", romaji: "pu", type: "dakuon-hiragana", row: "u" },

  { char: "げ", romaji: "ge", type: "dakuon-hiragana", row: "e" },
  { char: "ぜ", romaji: "ze", type: "dakuon-hiragana", row: "e" },
  { char: "で", romaji: "de", type: "dakuon-hiragana", row: "e" },
  { char: "べ", romaji: "be", type: "dakuon-hiragana", row: "e" },
  { char: "ぺ", romaji: "pe", type: "dakuon-hiragana", row: "e" },

  { char: "ご", romaji: "go", type: "dakuon-hiragana", row: "o" },
  { char: "ぞ", romaji: "zo", type: "dakuon-hiragana", row: "o" },
  { char: "ど", romaji: "do", type: "dakuon-hiragana", row: "o" },
  { char: "ぼ", romaji: "bo", type: "dakuon-hiragana", row: "o" },
  { char: "ぽ", romaji: "po", type: "dakuon-hiragana", row: "o" },

  { char: "きゃ", romaji: "kya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "しゃ", romaji: "sha", type: "yoon-hiragana", row: "yoon-a" },
  { char: "ちゃ", romaji: "cha", type: "yoon-hiragana", row: "yoon-a" },
  { char: "にゃ", romaji: "nya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "ひゃ", romaji: "hya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "みゃ", romaji: "mya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "りゃ", romaji: "rya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "ぎゃ", romaji: "gya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "じゃ", romaji: "jya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "ぢゃ", romaji: "dya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "びゃ", romaji: "bya", type: "yoon-hiragana", row: "yoon-a" },
  { char: "ぴゃ", romaji: "pya", type: "yoon-hiragana", row: "yoon-a" },

  { char: "きゅ", romaji: "kyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "しゅ", romaji: "shu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "ちゅ", romaji: "chu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "にゅ", romaji: "nyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "ひゅ", romaji: "hyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "みゅ", romaji: "myu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "りゅ", romaji: "ryu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "ぎゅ", romaji: "gyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "じゅ", romaji: "jyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "ぢゅ", romaji: "dyu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "びゅ", romaji: "byu", type: "yoon-hiragana", row: "yoon-u" },
  { char: "ぴゅ", romaji: "pyu", type: "yoon-hiragana", row: "yoon-u" },

  { char: "きょ", romaji: "kyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "しょ", romaji: "sho", type: "yoon-hiragana", row: "yoon-o" },
  { char: "ちょ", romaji: "cho", type: "yoon-hiragana", row: "yoon-o" },
  { char: "にょ", romaji: "nyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "ひょ", romaji: "hyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "みょ", romaji: "myo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "りょ", romaji: "ryo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "ぎょ", romaji: "gyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "じょ", romaji: "jyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "ぢょ", romaji: "dyo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "びょ", romaji: "byo", type: "yoon-hiragana", row: "yoon-o" },
  { char: "ぴょ", romaji: "pyo", type: "yoon-hiragana", row: "yoon-o" },
];
