import AllListIcon from "../../assets/icons/AllListIcon";
import { Button, Text } from "../../features";
import { styles } from "./style";
import { useContext, useMemo } from "react";
import { commonContext } from "../../contexts/CommonContextProvider";
import { Filter } from "../../types";

const AllList = () => {
  const { filter, setFilter } = useContext(commonContext);
  const isAll = useMemo(() => filter === Filter.ALL ,[filter])
  return (
    <Button
      onPress={() => {
        setFilter(Filter.ALL)
      }}
    >
      <AllListIcon active={isAll} />
      <Text
        style={[styles.text, isAll? styles.textSelected : {}]}>
        All
      </Text>
    </Button>
  );
};

export default AllList;
