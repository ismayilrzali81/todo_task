import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
  todoItem: {
    height: 90,
    borderRadius: 16,
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.green,
  },
  urgent: {
    borderWidth: 2,
    borderColor: Colors.red,
  },
  todoLeft: {},
  title: {
    fontWeight: "600",
    color: Colors.purple,
  },
  desc: {
    fontWeight: "600",
  },
  todoBtns: {
    flexDirection: "row",
  },
  button: {
    width: 40,
    height: 40,
  },
});
export default styles;
