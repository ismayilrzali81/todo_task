import { Button, Text } from "../../features";
import { styles } from "./style";
import { useContext, useMemo } from "react";
import { commonContext } from "../../contexts/CommonContextProvider";
import { Filter } from "../../types";
import UrgencyIcon from "../../assets/icons/UrgencyIcon";

const Urgency = () => {
  const { filter, setFilter } = useContext(commonContext);
  const isUrgency = useMemo(() => filter === Filter.URGENCY, [filter]);
  return (
    <Button
      onPress={() => {
        setFilter(Filter.URGENCY);
      }}
    >
      <UrgencyIcon active={isUrgency} />
      <Text style={[styles.text, isUrgency ? styles.textSelected : {}]}>
        Urgency
      </Text>
    </Button>
  );
};

export default Urgency;
