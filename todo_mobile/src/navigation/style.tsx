import { StyleSheet } from "react-native";
import Colors from "../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    zIndex: 100000000, // Add a zIndex to make sure it appears above other elements
  },
});