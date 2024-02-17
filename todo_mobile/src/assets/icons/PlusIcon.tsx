import Svg, { Path, SvgProps } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg width={22} height={25} viewBox="0 0 22 25" fill="none" {...props}>
    <Path
      d="M11 5.54688V19.3281M4.875 12.4375H17.125H4.875Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlusIcon;
