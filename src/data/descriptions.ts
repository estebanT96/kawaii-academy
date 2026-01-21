const getDescription = (type: string) => {
  const data = SYSTEM_DESCRIPTIONS.find((item) => item.title === type);
  if (!data) {
    return { title: "", icon: "" };
  }
  return {
    title: data.title,
    icon: data.icon,
  };
};

export const SYSTEM_DESCRIPTIONS = [
  {
    title: "Seion Hiragana",
    icon: "か",
  },
  {
    title: "Dakuon Hiragana",

    icon: "が",
  },
  {
    title: "Yoon Hiragana",
    icon: "きゃ",
  },
  {
    title: "Seion Katakana",
    icon: "カ",
  },
  {
    title: "Dakuon Katakana",
    icon: "ガ",
  },
  {
    title: "Yoon Katakana",
    icon: "キャ",
  },
];

export const seionHiraganaDesc = getDescription("Seion Hiragana");
export const dakuonHiraganaDesc = getDescription("Dakuon Hiragana");
export const yoonHiraganaDesc = getDescription("Yoon Hiragana");

export const seionKatakanaDesc = getDescription("Seion Katakana");
export const dakuonKatakanaDesc = getDescription("Dakuon Katakana");
export const yoonKatakanaDesc = getDescription("Yoon Katakana");
