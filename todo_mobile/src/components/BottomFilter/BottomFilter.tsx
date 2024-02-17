import { View } from "react-native";
import { styles } from "./style";
import AllList from "./AllList";
import Done from "./Done";
import Urgency from "./Urgency";


const BottomFilter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AllList/>
        <Urgency/>
        <Done/>
      </View>
    </View>
  );
};

export default BottomFilter;



