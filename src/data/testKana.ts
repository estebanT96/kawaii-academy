export interface KanaChar {
  char: string;
  romaji: string;
  type: "hiragana" | "katakana";
  row: string;
}

export const STUDY_CHAR: KanaChar[] = [
  { char: "あ", romaji: "a", type: "hiragana", row: "h-a" },
  { char: "い", romaji: "i", type: "hiragana", row: "h-a" },
  { char: "う", romaji: "u", type: "hiragana", row: "h-a" },
  { char: "え", romaji: "e", type: "hiragana", row: "h-a" },
  { char: "お", romaji: "o", type: "hiragana", row: "h-a" },
  { char: "ん", romaji: "n", type: "hiragana", row: "h-a" },

  { char: "か", romaji: "ka", type: "hiragana", row: "h-k" },
  { char: "き", romaji: "ki", type: "hiragana", row: "h-k" },
  { char: "く", romaji: "ku", type: "hiragana", row: "h-k" },
  { char: "け", romaji: "ke", type: "hiragana", row: "h-k" },
  { char: "こ", romaji: "ko", type: "hiragana", row: "h-k" },

  { char: "さ", romaji: "sa", type: "hiragana", row: "h-s" },
  { char: "し", romaji: "shi", type: "hiragana", row: "h-s" },
  { char: "す", romaji: "su", type: "hiragana", row: "h-s" },
  { char: "せ", romaji: "se", type: "hiragana", row: "h-s" },
  { char: "そ", romaji: "so", type: "hiragana", row: "h-s" },

  { char: "た", romaji: "ta", type: "hiragana", row: "h-t" },
  { char: "ち", romaji: "chi", type: "hiragana", row: "h-t" },
  { char: "つ", romaji: "tsu", type: "hiragana", row: "h-t" },
  { char: "て", romaji: "te", type: "hiragana", row: "h-t" },
  { char: "と", romaji: "to", type: "hiragana", row: "h-t" },

  { char: "な", romaji: "na", type: "hiragana", row: "h-n" },
  { char: "に", romaji: "ni", type: "hiragana", row: "h-n" },
  { char: "ぬ", romaji: "nu", type: "hiragana", row: "h-n" },
  { char: "ね", romaji: "ne", type: "hiragana", row: "h-n" },
  { char: "の", romaji: "no", type: "hiragana", row: "h-n" },

  { char: "は", romaji: "ha", type: "hiragana", row: "h-h" },
  { char: "ひ", romaji: "hi", type: "hiragana", row: "h-h" },
  { char: "ふ", romaji: "fu", type: "hiragana", row: "h-h" },
  { char: "へ", romaji: "he", type: "hiragana", row: "h-h" },
  { char: "ほ", romaji: "ho", type: "hiragana", row: "h-h" },

  { char: "ま", romaji: "ma", type: "hiragana", row: "h-m" },
  { char: "み", romaji: "mi", type: "hiragana", row: "h-m" },
  { char: "む", romaji: "mu", type: "hiragana", row: "h-m" },
  { char: "め", romaji: "me", type: "hiragana", row: "h-m" },
  { char: "も", romaji: "mo", type: "hiragana", row: "h-m" },

  { char: "ら", romaji: "ra", type: "hiragana", row: "h-r" },
  { char: "り", romaji: "ri", type: "hiragana", row: "h-r" },
  { char: "る", romaji: "ru", type: "hiragana", row: "h-r" },
  { char: "れ", romaji: "re", type: "hiragana", row: "h-r" },
  { char: "ろ", romaji: "ro", type: "hiragana", row: "h-r" },

  { char: "や", romaji: "ya", type: "hiragana", row: "h-y" },
  { char: "ゆ", romaji: "yu", type: "hiragana", row: "h-y" },
  { char: "よ", romaji: "yo", type: "hiragana", row: "h-y" },

  { char: "わ", romaji: "wa", type: "hiragana", row: "h-w" },
  { char: "を", romaji: "wo", type: "hiragana", row: "h-w" },

  { char: "が", romaji: "ga", type: "hiragana", row: "h-g" },
  { char: "ぎ", romaji: "gi", type: "hiragana", row: "h-g" },
  { char: "ぐ", romaji: "gu", type: "hiragana", row: "h-g" },
  { char: "げ", romaji: "ge", type: "hiragana", row: "h-g" },
  { char: "ご", romaji: "go", type: "hiragana", row: "h-g" },

  { char: "ざ", romaji: "za", type: "hiragana", row: "h-z" },
  { char: "じ", romaji: "ji", type: "hiragana", row: "h-z" },
  { char: "ず", romaji: "zu", type: "hiragana", row: "h-z" },
  { char: "ぜ", romaji: "ze", type: "hiragana", row: "h-z" },
  { char: "ぞ", romaji: "zo", type: "hiragana", row: "h-z" },

  { char: "だ", romaji: "da", type: "hiragana", row: "h-d" },
  { char: "ぢ", romaji: "di", type: "hiragana", row: "h-d" },
  { char: "づ", romaji: "dzu", type: "hiragana", row: "h-d" },
  { char: "で", romaji: "de", type: "hiragana", row: "h-d" },
  { char: "ど", romaji: "do", type: "hiragana", row: "h-d" },

  { char: "ば", romaji: "ba", type: "hiragana", row: "h-b" },
  { char: "び", romaji: "bi", type: "hiragana", row: "h-b" },
  { char: "ぶ", romaji: "bu", type: "hiragana", row: "h-b" },
  { char: "べ", romaji: "be", type: "hiragana", row: "h-b" },
  { char: "ぼ", romaji: "bo", type: "hiragana", row: "h-b" },

  { char: "ぱ", romaji: "pa", type: "hiragana", row: "h-p" },
  { char: "ぴ", romaji: "pi", type: "hiragana", row: "h-p" },
  { char: "ぷ", romaji: "pu", type: "hiragana", row: "h-p" },
  { char: "ぺ", romaji: "pe", type: "hiragana", row: "h-p" },
  { char: "ぽ", romaji: "po", type: "hiragana", row: "h-p" },

  { char: "きゃ", romaji: "kya", type: "hiragana", row: "h-ki" },
  { char: "きゅ", romaji: "kyu", type: "hiragana", row: "h-ki" },
  { char: "きょ", romaji: "kyo", type: "hiragana", row: "h-ki" },

  { char: "しゃ", romaji: "sha", type: "hiragana", row: "h-shi" },
  { char: "しゅ", romaji: "shu", type: "hiragana", row: "h-shi" },
  { char: "しょ", romaji: "sho", type: "hiragana", row: "h-shi" },

  { char: "ちゃ", romaji: "cha", type: "hiragana", row: "h-chi" },
  { char: "ちゅ", romaji: "chu", type: "hiragana", row: "h-chi" },
  { char: "ちょ", romaji: "cho", type: "hiragana", row: "h-chi" },

  { char: "にゃ", romaji: "nya", type: "hiragana", row: "h-ni" },
  { char: "にゅ", romaji: "nyu", type: "hiragana", row: "h-ni" },
  { char: "にょ", romaji: "nyo", type: "hiragana", row: "h-ni" },

  { char: "ひゃ", romaji: "hya", type: "hiragana", row: "h-hi" },
  { char: "ひゅ", romaji: "hyu", type: "hiragana", row: "h-hi" },
  { char: "ひょ", romaji: "hyo", type: "hiragana", row: "h-hi" },

  { char: "みゃ", romaji: "mya", type: "hiragana", row: "h-mi" },
  { char: "みゅ", romaji: "myu", type: "hiragana", row: "h-mi" },
  { char: "みょ", romaji: "myo", type: "hiragana", row: "h-mi" },

  { char: "りゃ", romaji: "rya", type: "hiragana", row: "h-ri" },
  { char: "りゅ", romaji: "ryu", type: "hiragana", row: "h-ri" },
  { char: "りょ", romaji: "ryo", type: "hiragana", row: "h-ri" },

  { char: "ぎゃ", romaji: "gya", type: "hiragana", row: "h-gi" },
  { char: "ぎゅ", romaji: "gyu", type: "hiragana", row: "h-gi" },
  { char: "ぎょ", romaji: "gyo", type: "hiragana", row: "h-gi" },

  { char: "じゃ", romaji: "ja", type: "hiragana", row: "h-ji" },
  { char: "じゅ", romaji: "ju", type: "hiragana", row: "h-ji" },
  { char: "じょ", romaji: "jo", type: "hiragana", row: "h-ji" },

  { char: "ぢゃ", romaji: "dya", type: "hiragana", row: "h-di" },
  { char: "ぢゅ", romaji: "dyu", type: "hiragana", row: "h-di" },
  { char: "ぢょ", romaji: "dyo", type: "hiragana", row: "h-di" },

  { char: "びゃ", romaji: "bya", type: "hiragana", row: "h-bi" },
  { char: "びゅ", romaji: "byu", type: "hiragana", row: "h-bi" },
  { char: "びょ", romaji: "byo", type: "hiragana", row: "h-bi" },

  { char: "ぴゃ", romaji: "pya", type: "hiragana", row: "h-pi" },
  { char: "ぴゅ", romaji: "pyu", type: "hiragana", row: "h-pi" },
  { char: "ぴょ", romaji: "pyo", type: "hiragana", row: "h-pi" },

  { char: "ア", romaji: "a", type: "katakana", row: "k-a" },
  { char: "イ", romaji: "i", type: "katakana", row: "k-a" },
  { char: "ウ", romaji: "u", type: "katakana", row: "k-a" },
  { char: "エ", romaji: "e", type: "katakana", row: "k-a" },
  { char: "オ", romaji: "o", type: "katakana", row: "k-a" },
  { char: "ン", romaji: "n", type: "katakana", row: "k-a" },

  { char: "カ", romaji: "ka", type: "katakana", row: "k-k" },
  { char: "キ", romaji: "ki", type: "katakana", row: "k-k" },
  { char: "ク", romaji: "ku", type: "katakana", row: "k-k" },
  { char: "ケ", romaji: "ke", type: "katakana", row: "k-k" },
  { char: "コ", romaji: "ko", type: "katakana", row: "k-k" },

  { char: "サ", romaji: "sa", type: "katakana", row: "k-s" },
  { char: "シ", romaji: "shi", type: "katakana", row: "k-s" },
  { char: "ス", romaji: "su", type: "katakana", row: "k-s" },
  { char: "セ", romaji: "se", type: "katakana", row: "k-s" },
  { char: "ソ", romaji: "so", type: "katakana", row: "k-s" },

  { char: "タ", romaji: "ta", type: "katakana", row: "k-t" },
  { char: "チ", romaji: "chi", type: "katakana", row: "k-t" },
  { char: "ツ", romaji: "tsu", type: "katakana", row: "k-t" },
  { char: "テ", romaji: "te", type: "katakana", row: "k-t" },
  { char: "ト", romaji: "to", type: "katakana", row: "k-t" },

  { char: "ナ", romaji: "na", type: "katakana", row: "k-n" },
  { char: "ニ", romaji: "ni", type: "katakana", row: "k-n" },
  { char: "ヌ", romaji: "nu", type: "katakana", row: "k-n" },
  { char: "ネ", romaji: "ne", type: "katakana", row: "k-n" },
  { char: "ノ", romaji: "no", type: "katakana", row: "k-n" },

  { char: "ハ", romaji: "ha", type: "katakana", row: "k-h" },
  { char: "ヒ", romaji: "hi", type: "katakana", row: "k-h" },
  { char: "フ", romaji: "fu", type: "katakana", row: "k-h" },
  { char: "ヘ", romaji: "he", type: "katakana", row: "k-h" },
  { char: "ホ", romaji: "ho", type: "katakana", row: "k-h" },

  { char: "マ", romaji: "ma", type: "katakana", row: "k-m" },
  { char: "ミ", romaji: "mi", type: "katakana", row: "k-m" },
  { char: "ム", romaji: "mu", type: "katakana", row: "k-m" },
  { char: "メ", romaji: "me", type: "katakana", row: "k-m" },
  { char: "モ", romaji: "mo", type: "katakana", row: "k-m" },

  { char: "ラ", romaji: "ra", type: "katakana", row: "k-r" },
  { char: "リ", romaji: "ri", type: "katakana", row: "k-r" },
  { char: "ル", romaji: "ru", type: "katakana", row: "k-r" },
  { char: "レ", romaji: "re", type: "katakana", row: "k-r" },
  { char: "ロ", romaji: "ro", type: "katakana", row: "k-r" },

  { char: "ヤ", romaji: "ya", type: "katakana", row: "k-y" },
  { char: "ユ", romaji: "yu", type: "katakana", row: "k-y" },
  { char: "ヨ", romaji: "yo", type: "katakana", row: "k-y" },

  { char: "ワ", romaji: "wa", type: "katakana", row: "k-w" },
  { char: "ヲ", romaji: "wo", type: "katakana", row: "k-w" },

  { char: "ガ", romaji: "ga", type: "katakana", row: "k-g" },
  { char: "ギ", romaji: "gi", type: "katakana", row: "k-g" },
  { char: "グ", romaji: "gu", type: "katakana", row: "k-g" },
  { char: "ゲ", romaji: "ge", type: "katakana", row: "k-g" },
  { char: "ゴ", romaji: "go", type: "katakana", row: "k-g" },

  { char: "ザ", romaji: "za", type: "katakana", row: "k-z" },
  { char: "ジ", romaji: "ji", type: "katakana", row: "k-z" },
  { char: "ズ", romaji: "zu", type: "katakana", row: "k-z" },
  { char: "ゼ", romaji: "ze", type: "katakana", row: "k-z" },
  { char: "ゾ", romaji: "zo", type: "katakana", row: "k-z" },

  { char: "ダ", romaji: "da", type: "katakana", row: "k-d" },
  { char: "ヂ", romaji: "di", type: "katakana", row: "k-d" },
  { char: "ヅ", romaji: "dzu", type: "katakana", row: "k-d" },
  { char: "デ", romaji: "de", type: "katakana", row: "k-d" },
  { char: "ド", romaji: "do", type: "katakana", row: "k-d" },

  { char: "バ", romaji: "ba", type: "katakana", row: "k-b" },
  { char: "ビ", romaji: "bi", type: "katakana", row: "k-b" },
  { char: "ブ", romaji: "bu", type: "katakana", row: "k-b" },
  { char: "ベ", romaji: "be", type: "katakana", row: "k-b" },
  { char: "ボ", romaji: "bo", type: "katakana", row: "k-b" },

  { char: "パ", romaji: "pa", type: "katakana", row: "k-p" },
  { char: "ピ", romaji: "pi", type: "katakana", row: "k-p" },
  { char: "プ", romaji: "pu", type: "katakana", row: "k-p" },
  { char: "ペ", romaji: "pe", type: "katakana", row: "k-p" },
  { char: "ポ", romaji: "po", type: "katakana", row: "k-p" },

  { char: "キャ", romaji: "kya", type: "katakana", row: "k-ki" },
  { char: "キュ", romaji: "kyu", type: "katakana", row: "k-ki" },
  { char: "キョ", romaji: "kyo", type: "katakana", row: "k-ki" },

  { char: "シャ", romaji: "sha", type: "katakana", row: "k-shi" },
  { char: "シュ", romaji: "shu", type: "katakana", row: "k-shi" },
  { char: "ショ", romaji: "sho", type: "katakana", row: "k-shi" },

  { char: "チャ", romaji: "cha", type: "katakana", row: "k-chi" },
  { char: "チュ", romaji: "chu", type: "katakana", row: "k-chi" },
  { char: "チョ", romaji: "cho", type: "katakana", row: "k-chi" },

  { char: "ニャ", romaji: "nya", type: "katakana", row: "k-ni" },
  { char: "ニュ", romaji: "nyu", type: "katakana", row: "k-ni" },
  { char: "ニョ", romaji: "nyo", type: "katakana", row: "k-ni" },

  { char: "ヒャ", romaji: "hya", type: "katakana", row: "k-hi" },
  { char: "ヒュ", romaji: "hyu", type: "katakana", row: "k-hi" },
  { char: "ヒョ", romaji: "hyo", type: "katakana", row: "k-hi" },

  { char: "ミャ", romaji: "mya", type: "katakana", row: "k-mi" },
  { char: "ミュ", romaji: "myu", type: "katakana", row: "k-mi" },
  { char: "ミョ", romaji: "myo", type: "katakana", row: "k-mi" },

  { char: "リャ", romaji: "rya", type: "katakana", row: "k-ri" },
  { char: "リュ", romaji: "ryu", type: "katakana", row: "k-ri" },
  { char: "リョ", romaji: "ryo", type: "katakana", row: "k-ri" },

  { char: "ギャ", romaji: "gya", type: "katakana", row: "k-gi" },
  { char: "ギュ", romaji: "gyu", type: "katakana", row: "k-gi" },
  { char: "ギョ", romaji: "gyo", type: "katakana", row: "k-gi" },

  { char: "ジャ", romaji: "ja", type: "katakana", row: "k-ji" },
  { char: "ジュ", romaji: "ju", type: "katakana", row: "k-ji" },
  { char: "ジョ", romaji: "jo", type: "katakana", row: "k-ji" },

  { char: "ヂャ", romaji: "dya", type: "katakana", row: "k-di" },
  { char: "ヂュ", romaji: "dyu", type: "katakana", row: "k-di" },
  { char: "ヂョ", romaji: "dyo", type: "katakana", row: "k-di" },

  { char: "ビャ", romaji: "bya", type: "katakana", row: "k-bi" },
  { char: "ビュ", romaji: "byu", type: "katakana", row: "k-bi" },
  { char: "ビョ", romaji: "byo", type: "katakana", row: "k-bi" },

  { char: "ピャ", romaji: "pya", type: "katakana", row: "k-pi" },
  { char: "ピュ", romaji: "pyu", type: "katakana", row: "k-pi" },
  { char: "ピョ", romaji: "pyo", type: "katakana", row: "k-pi" },
];

