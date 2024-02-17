import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 68,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    marginTop:3,
    fontSize: 11,
    textAlign: "center",
  },
  textSelected: {
    color: Colors.purple,
  }
});
