export interface KanaChar {
  char: string;
  romaji: string;
  type: 'hiragana' |'yoon-hiragana' | 'katakana';
  row: string;
}

export const KANA_CHAR : KanaChar[] = [
  { char: 'あ', romaji: 'a', type: 'hiragana', row: 'a' },
  { char: 'い', romaji: 'i', type: 'hiragana', row: 'a' },
  { char: 'う', romaji: 'u', type: 'hiragana', row: 'a' },
  { char: 'え', romaji: 'e', type: 'hiragana', row: 'a' },
  { char: 'お', romaji: 'o', type: 'hiragana', row: 'a' },

  { char: 'か', romaji: 'ka', type: 'hiragana', row: 'ka' },
  { char: 'き', romaji: 'ki', type: 'hiragana', row: 'ka' },
  { char: 'く', romaji: 'ku', type: 'hiragana', row: 'ka' },
  { char: 'け', romaji: 'ke', type: 'hiragana', row: 'ka' },
  { char: 'こ', romaji: 'ko', type: 'hiragana', row: 'ka' },

  { char: 'さ', romaji: 'sa', type: 'hiragana', row: 'sa' },
  { char: 'し', romaji: 'shi', type: 'hiragana', row: 'sa' },
  { char: 'す', romaji: 'su', type: 'hiragana', row: 'sa' },
  { char: 'せ', romaji: 'se', type: 'hiragana', row: 'sa' },
  { char: 'そ', romaji: 'so', type: 'hiragana', row: 'sa' },

  { char: 'た', romaji: 'ta', type: 'hiragana', row: 'ta' },
  { char: 'ち', romaji: 'chi', type: 'hiragana', row: 'ta' },
  { char: 'つ', romaji: 'tsu', type: 'hiragana', row: 'ta' },
  { char: 'て', romaji: 'te', type: 'hiragana', row: 'ta' },
  { char: 'と', romaji: 'to', type: 'hiragana', row: 'ta' },

  { char: 'な', romaji: 'na', type: 'hiragana', row: 'na' },
  { char: 'に', romaji: 'ni', type: 'hiragana', row: 'na' },
  { char: 'ぬ', romaji: 'nu', type: 'hiragana', row: 'na' },
  { char: 'ね', romaji: 'ne', type: 'hiragana', row: 'na' },
  { char: 'の', romaji: 'no', type: 'hiragana', row: 'na' },

  { char: 'は', romaji: 'ha', type: 'hiragana', row: 'ha' },
  { char: 'ひ', romaji: 'hi', type: 'hiragana', row: 'ha' },
  { char: 'ふ', romaji: 'fu', type: 'hiragana', row: 'ha' },
  { char: 'へ', romaji: 'he', type: 'hiragana', row: 'ha' },
  { char: 'ほ', romaji: 'ho', type: 'hiragana', row: 'ha' },

  { char: 'ま', romaji: 'ma', type: 'hiragana', row: 'ma' },
  { char: 'み', romaji: 'mi', type: 'hiragana', row: 'ma' },
  { char: 'む', romaji: 'mu', type: 'hiragana', row: 'ma' },
  { char: 'め', romaji: 'me', type: 'hiragana', row: 'ma' },
  { char: 'も', romaji: 'mo', type: 'hiragana', row: 'ma' },

  { char: 'や', romaji: 'ya', type: 'hiragana', row: 'ya' },
  { char: 'ゆ', romaji: 'yu', type: 'hiragana', row: 'ya' },
  { char: 'よ', romaji: 'yo', type: 'hiragana', row: 'ya' },

  { char: 'ら', romaji: 'ra', type: 'hiragana', row: 'ra' },
  { char: 'り', romaji: 'ri', type: 'hiragana', row: 'ra' },
  { char: 'る', romaji: 'ru', type: 'hiragana', row: 'ra' },
  { char: 'れ', romaji: 're', type: 'hiragana', row: 'ra' },
  { char: 'ろ', romaji: 'ro', type: 'hiragana', row: 'ra' },
  
  { char: 'わ', romaji: 'wa', type: 'hiragana', row: 'wa' },
  { char: 'を', romaji: 'wo', type: 'hiragana', row: 'wa' },
  { char: 'ん', romaji: 'n', type: 'hiragana', row: 'wa' },

  { char: 'が', romaji: 'ga', type: 'hiragana', row: 'ga' },
  { char: 'ぎ', romaji: 'gi', type: 'hiragana', row: 'ga' },
  { char: 'ぐ', romaji: 'gu', type: 'hiragana', row: 'ga' },
  { char: 'げ', romaji: 'ge', type: 'hiragana', row: 'ga' },
  { char: 'ご', romaji: 'go', type: 'hiragana', row: 'ga' },

  { char: 'ざ', romaji: 'za', type: 'hiragana', row: 'za' },
  { char: 'じ', romaji: 'ji', type: 'hiragana', row: 'za' },
  { char: 'ず', romaji: 'zu', type: 'hiragana', row: 'za' },
  { char: 'ぜ', romaji: 'ze', type: 'hiragana', row: 'za' },
  { char: 'ぞ', romaji: 'zo', type: 'hiragana', row: 'za' },

  { char: 'だ', romaji: 'da', type: 'hiragana', row: 'da' },
  { char: 'ぢ', romaji: 'di', type: 'hiragana', row: 'da' },
  { char: 'づ', romaji: 'dzu', type: 'hiragana', row: 'da' },
  { char: 'で', romaji: 'de', type: 'hiragana', row: 'da' },
  { char: 'ど', romaji: 'do', type: 'hiragana', row: 'da' },

  { char: 'ば', romaji: 'ba', type: 'hiragana', row: 'ba' },
  { char: 'び', romaji: 'bi', type: 'hiragana', row: 'ba' },
  { char: 'ぶ', romaji: 'bu', type: 'hiragana', row: 'ba' },
  { char: 'べ', romaji: 'be', type: 'hiragana', row: 'ba' },
  { char: 'ぼ', romaji: 'bo', type: 'hiragana', row: 'ba' },

  { char: 'ぱ', romaji: 'pa', type: 'hiragana', row: 'pa' },
  { char: 'ぴ', romaji: 'pi', type: 'hiragana', row: 'pa' },
  { char: 'ぷ', romaji: 'pu', type: 'hiragana', row: 'pa' },
  { char: 'ぺ', romaji: 'pe', type: 'hiragana', row: 'pa' },
  { char: 'ぽ', romaji: 'po', type: 'hiragana', row: 'pa' },
 
  { char: 'きゃ', romaji: 'kya', type: 'yoon-hiragana', row: 'kya' },
  { char: 'きゅ', romaji: 'kyu', type: 'yoon-hiragana', row: 'kya' },
  { char: 'きょ', romaji: 'kyo', type: 'yoon-hiragana', row: 'kya' },

  { char: 'しゃ', romaji: 'sha', type: 'yoon-hiragana', row: 'sha' },
  { char: 'しゅ', romaji: 'shu', type: 'yoon-hiragana', row: 'sha' },
  { char: 'しょ', romaji: 'sho', type: 'yoon-hiragana', row: 'sha' },

  { char: 'ちゃ', romaji: 'cha', type: 'yoon-hiragana', row: 'cha' },
  { char: 'ちゅ', romaji: 'chu', type: 'yoon-hiragana', row: 'cha' },
  { char: 'ちょ', romaji: 'cho', type: 'yoon-hiragana', row: 'cha' },

  { char: 'にゃ', romaji: 'nya', type: 'yoon-hiragana', row: 'nya' },
  { char: 'にゅ', romaji: 'nyu', type: 'yoon-hiragana', row: 'nya' },
  { char: 'にょ', romaji: 'nyo', type: 'yoon-hiragana', row: 'nya' },

  { char: 'ひゃ', romaji: 'hya', type: 'yoon-hiragana', row: 'hya' },
  { char: 'ひゅ', romaji: 'hyu', type: 'yoon-hiragana', row: 'hya' },
  { char: 'ひょ', romaji: 'hyo', type: 'yoon-hiragana', row: 'hya' },

  { char: 'みゃ', romaji: 'mya', type: 'yoon-hiragana', row: 'mya' },
  { char: 'みゅ', romaji: 'myu', type: 'yoon-hiragana', row: 'mya' },
  { char: 'みょ', romaji: 'myo', type: 'yoon-hiragana', row: 'mya' },

  { char: 'りゃ', romaji: 'rya', type: 'yoon-hiragana', row: 'rya' },
  { char: 'りゅ', romaji: 'ryu', type: 'yoon-hiragana', row: 'rya' },
  { char: 'りょ', romaji: 'ryo', type: 'yoon-hiragana', row: 'rya' },

  { char: 'ぎゃ', romaji: 'gya', type: 'yoon-hiragana', row: 'gya' },
  { char: 'ぎゅ', romaji: 'gyu', type: 'yoon-hiragana', row: 'gya' },
  { char: 'ぎょ', romaji: 'gyo', type: 'yoon-hiragana', row: 'gya' },

  { char: 'じゃ', romaji: 'jya', type: 'yoon-hiragana', row: 'jya' },
  { char: 'じゅ', romaji: 'jyu', type: 'yoon-hiragana', row: 'jya' },
  { char: 'じょ', romaji: 'jyo', type: 'yoon-hiragana', row: 'jya' },

  { char: 'ぢゃ', romaji: 'dya', type: 'yoon-hiragana', row: 'dya' },
  { char: 'ぢゅ', romaji: 'dyu', type: 'yoon-hiragana', row: 'dya' },
  { char: 'ぢょ', romaji: 'dyo', type: 'yoon-hiragana', row: 'dya' },

  { char: 'びゃ', romaji: 'bya', type: 'yoon-hiragana', row: 'bya' },
  { char: 'びゅ', romaji: 'byu', type: 'yoon-hiragana', row: 'bya' },
  { char: 'びょ', romaji: 'byo', type: 'yoon-hiragana', row: 'bya' },

  { char: 'ぴゃ', romaji: 'pya', type: 'yoon-hiragana', row: 'pya' },
  { char: 'ぴゅ', romaji: 'pyu', type: 'yoon-hiragana', row: 'pya' },
  { char: 'ぴょ', romaji: 'pyo', type: 'yoon-hiragana', row: 'pya' },


]


