import React from "react";
import { G, Path, Svg } from "react-native-svg";
import Colors from "../../theme/colors";
import { ActiveInterface } from "../../interfaces";

const UrgencyIcon = ({ active }: ActiveInterface) => {
  return (
    <Svg width={20} height={18} viewBox="0 0 256 256">
      <G
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}
      >
        <Path
          d="M45 64.242a4.765 4.765 0 01-4.766-4.497l-2.552-24.631a7.389 7.389 0 011.934-5.6A7.368 7.368 0 0145 27.164c2.036 0 3.999.856 5.384 2.349a7.365 7.365 0 011.939 5.545l-2.557 24.687A4.765 4.765 0 0145 64.242zm0-33.078c-.941 0-1.811.38-2.452 1.07a3.306 3.306 0 00-.883 2.524l2.561 24.743a.773.773 0 001.546 0l.009-.118 2.558-24.681a3.283 3.283 0 00-.889-2.469A3.307 3.307 0 0045 31.164zM45 80.158c-3.54 0-6.42-2.88-6.42-6.42s2.88-6.42 6.42-6.42 6.42 2.88 6.42 6.42-2.88 6.42-6.42 6.42zm0-8.84c-1.334 0-2.42 1.086-2.42 2.42s1.086 2.42 2.42 2.42c1.334 0 2.42-1.086 2.42-2.42s-1.086-2.42-2.42-2.42z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={active ? Colors.purple : Colors.gray}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M84.036 88.193H5.965a5.91 5.91 0 01-5.098-2.875 5.908 5.908 0 01-.179-5.848L39.723 4.998A5.943 5.943 0 0145 1.807a5.944 5.944 0 015.278 3.192L89.312 79.47c.977 1.862.91 4.049-.179 5.848s-2.994 2.875-5.097 2.875zM45 5.806c-.356 0-1.238.103-1.734 1.049L4.23 81.327a1.926 1.926 0 00.059 1.921 1.93 1.93 0 001.676.945h78.071a1.93 1.93 0 001.675-.944c.172-.284.521-1.04.059-1.922L46.734 6.856c-.496-.947-1.378-1.05-1.734-1.05z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={active ? Colors.purple : Colors.gray}
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
};

export default UrgencyIcon;
