import { HIRAGANA_ROWS } from "../data/filteredHiragana";
import HiraganaRow from "./HiraganaRow";

interface Props {
  onHover: (character: string, romaji: string) => void;
}

const NormalHiraganaRows = ({ onHover }: Props) => {
  return HIRAGANA_ROWS.map((row) => (
    <HiraganaRow
      key={row.vowel}
      vowel={row.vowel}
      rowCharacters={row.chars}
      onHover={onHover}
    />
  ));
};

export default NormalHiraganaRows;
