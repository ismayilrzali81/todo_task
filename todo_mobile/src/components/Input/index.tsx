import { StyleProp, TextInput, TextStyle } from "react-native";
import { style } from "./style";
import Colors from "../../theme/colors";
import { forwardRef } from "react";

interface InputProps {
  styleProp?: StyleProp<TextStyle>;
  value: string;
  onChangeText: (e: string) => void;
  placeholder: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ onChangeText, placeholder, value, styleProp }, ref) => {

    return (
      <TextInput
        ref={ref}
        onChangeText={onChangeText}
        value={value}
        style={[style.input, styleProp]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
      />
    );
  }
);

export default Input;
