import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  customContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
