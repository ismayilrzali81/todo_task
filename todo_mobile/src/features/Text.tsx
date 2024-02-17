import React, { ReactNode } from "react";
import { StyleSheet, Text as RNText, TextStyle } from "react-native";

interface TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[] ;
}

const Text = ({ children, style }: TextProps) => {
  return <RNText style={[styles.textStyle, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Text;
