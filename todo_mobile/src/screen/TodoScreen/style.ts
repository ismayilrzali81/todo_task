import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
const styles = StyleSheet.create({
  flex_1: { flex: 1 },
  container: {
    backgroundColor: Colors.lightPurple,
    flex: 1,
    width: "100%",
    height: 200,
    padding: 16,
  },
  addBtn: {
    position: "absolute",
    width: 70,
    height: 70,
    backgroundColor: Colors.purple,
    borderRadius: 50,
    right: 10,
    bottom: 20,
  },
});
export default styles;
