import DoneIcon from "../../assets/icons/DoneIcon";
import { Button, Text } from "../../features";
import { styles } from "./style";
import { useContext, useMemo } from "react";
import { commonContext } from "../../contexts/CommonContextProvider";
import { Filter } from "../../types";

const Done = () => {
  const { filter, setFilter } = useContext(commonContext);
  const isDone = useMemo(() => filter === Filter.DONE, [filter]);
  console.log({ filter });
  return (
    <Button
      onPress={() => {
        setFilter(Filter.DONE);
      }}
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <DoneIcon active={isDone} />
      <Text style={[styles.text, isDone ? styles.textSelected : {}]}>
        Completed
      </Text>
    </Button>
  );
};

export default Done;
