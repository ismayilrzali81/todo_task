import { Path, Svg } from "react-native-svg";
import { ActiveAllDoneInterface } from "../../interfaces";
import Colors from "../../theme/colors";

const DoneIcon = ({active}: ActiveAllDoneInterface) => {
  return (
    <Svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill='none'
    >
      <Path
        d="M1.25 6.625L7.08375 12.25L18.75 1"
        stroke={active ? Colors.purple : Colors.gray}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DoneIcon;
