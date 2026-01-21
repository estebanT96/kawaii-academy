const getWord = (type: string) =>
  KANA_WORDS.filter((item) => item.type === type);

export interface Word {
  wordInKana: string;
  type: "hiragana" | "katakana";
  wordInRomaji: string;
}

export const KANA_WORDS: Word[] = [
  { wordInKana: "ありがとう", type: "hiragana", wordInRomaji: "a∘ri∘ga∘to∘u" },
  {
    wordInKana: "こんにちは",
    type: "hiragana",
    wordInRomaji: "ko∘n∘ni∘chi∘wa",
  },
  { wordInKana: "さようなら", type: "hiragana", wordInRomaji: "sa∘yo∘u∘na∘ra" },
  { wordInKana: "おはよう", type: "hiragana", wordInRomaji: "o∘ha∘yo∘u" },
  { wordInKana: "こんばんは", type: "hiragana", wordInRomaji: "ko∘n∘ba∘n∘wa" },
  {
    wordInKana: "はじめまして",
    type: "hiragana",
    wordInRomaji: "ha∘ji∘me∘ma∘shi∘te",
  },
  { wordInKana: "よろしく", type: "hiragana", wordInRomaji: "yo∘ro∘shi∘ku" },
  {
    wordInKana: "ごめんなさい",
    type: "hiragana",
    wordInRomaji: "go∘me∘n∘na∘sa∘i",
  },
  { wordInKana: "すみません", type: "hiragana", wordInRomaji: "su∘mi∘ma∘se∘n" },
  { wordInKana: "おいしい", type: "hiragana", wordInRomaji: "o∘i∘shi∘i" },
  { wordInKana: "たのしい", type: "hiragana", wordInRomaji: "ta∘no∘shi∘i" },
  { wordInKana: "うれしい", type: "hiragana", wordInRomaji: "u∘re∘shi∘i" },
  { wordInKana: "かなしい", type: "hiragana", wordInRomaji: "ka∘na∘shi∘i" },
  { wordInKana: "あつい", type: "hiragana", wordInRomaji: "a∘tsu∘i" },
  { wordInKana: "さむい", type: "hiragana", wordInRomaji: "sa∘mu∘i" },
  { wordInKana: "おおきい", type: "hiragana", wordInRomaji: "o∘o∘ki∘i" },
  { wordInKana: "ちいさい", type: "hiragana", wordInRomaji: "chi∘i∘sa∘i" },
  { wordInKana: "あたらしい", type: "hiragana", wordInRomaji: "a∘ta∘ra∘shi∘i" },
  { wordInKana: "ふるい", type: "hiragana", wordInRomaji: "fu∘ru∘i" },
  { wordInKana: "いい", type: "hiragana", wordInRomaji: "i∘i" },
  { wordInKana: "わるい", type: "hiragana", wordInRomaji: "wa∘ru∘i" },
  { wordInKana: "すき", type: "hiragana", wordInRomaji: "su∘ki" },
  { wordInKana: "きらい", type: "hiragana", wordInRomaji: "ki∘ra∘i" },
  { wordInKana: "いぬ", type: "hiragana", wordInRomaji: "i∘nu" },
  { wordInKana: "ねこ", type: "hiragana", wordInRomaji: "ne∘ko" },

  {
    wordInKana: "アメリカ",
    type: "katakana",
    wordInRomaji: "a∘me∘ri∘ka",
  },
  { wordInKana: "コーヒー", type: "katakana", wordInRomaji: "ko∘o∘hi∘i" },
  {
    wordInKana: "ハンバーガー",
    type: "katakana",
    wordInRomaji: "ha∘n∘ba∘a∘ga∘a",
  },
  {
    wordInKana: "チョコレート",
    type: "katakana",
    wordInRomaji: "cho∘ko∘re∘e∘to",
  },
  {
    wordInKana: "サンドイッチ",
    type: "katakana",
    wordInRomaji: "sa∘n∘do∘i∘cchi",
  },
  { wordInKana: "サラダ", type: "katakana", wordInRomaji: "sa∘ra∘da" },
  { wordInKana: "ピザ", type: "katakana", wordInRomaji: "pi∘za" },
  { wordInKana: "パスタ", type: "katakana", wordInRomaji: "pa∘su∘ta" },
  { wordInKana: "カレー", type: "katakana", wordInRomaji: "ka∘re∘e" },
  { wordInKana: "ケーキ", type: "katakana", wordInRomaji: "ke∘e∘ki" },
  { wordInKana: "ジュース", type: "katakana", wordInRomaji: "ju∘u∘su" },
  { wordInKana: "ビール", type: "katakana", wordInRomaji: "bi∘i∘ru" },
  { wordInKana: "ワイン", type: "katakana", wordInRomaji: "wa∘i∘n" },
  { wordInKana: "ミルク", type: "katakana", wordInRomaji: "mi∘ru∘ku" },
  { wordInKana: "トマト", type: "katakana", wordInRomaji: "to∘ma∘to" },
  { wordInKana: "バナナ", type: "katakana", wordInRomaji: "ba∘na∘na" },
  { wordInKana: "レモン", type: "katakana", wordInRomaji: "re∘mo∘n" },
  { wordInKana: "オレンジ", type: "katakana", wordInRomaji: "o∘re∘n∘ji" },
  { wordInKana: "メロン", type: "katakana", wordInRomaji: "me∘ro∘n" },
  { wordInKana: "レストラン", type: "katakana", wordInRomaji: "re∘su∘to∘ra∘n" },
  { wordInKana: "ホテル", type: "katakana", wordInRomaji: "ho∘te∘ru" },
  { wordInKana: "バス", type: "katakana", wordInRomaji: "ba∘su" },
  { wordInKana: "タクシー", type: "katakana", wordInRomaji: "ta∘ku∘shi∘i" },
  { wordInKana: "トイレ", type: "katakana", wordInRomaji: "to∘i∘re" },
  
];

export const hiraganaWords = getWord("hiragana");
export const katakanaWords = getWord("katakana");

export const hiraganaTableHeader = { type: "Hiragana", romaji: "Romaji" };
export const katakanaTableHeader = { type: "Katakana", romaji: "Romaji" };
