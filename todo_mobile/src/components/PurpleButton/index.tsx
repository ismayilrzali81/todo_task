import { Button, Text } from "../../features";
import { ButtonProps } from "../../features/Button";
import { style } from "./style";

interface Props extends Pick<ButtonProps, "onPress" | "style"> {
  text:string
}

const PurpleButton = ({ onPress, style: styleProps, text }: Props) => {
  return (
    <Button style={[style.button, styleProps]} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </Button>
  );
};

export default PurpleButton;
