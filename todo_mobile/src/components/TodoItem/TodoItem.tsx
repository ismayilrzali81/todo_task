import React, { useContext } from "react";
import { Alert, View } from "react-native";
import { Text, Button } from "../../features";
import styles from "./style";
import { CheckCircleIcon, DeleteIcon, PenIcon } from "../../assets/icons";
import { ADD_EDIT_SCREEN, RootStackParamList, TodoData, URGENCY } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { deleteTodoApi, makeDoneApi } from "../../api/todo";
import { commonContext } from "../../contexts/CommonContextProvider";
import Toast from "react-native-toast-message";

interface Props {
  item: TodoData;
  navigate: StackNavigationProp<RootStackParamList, "AddEdit">;
}

const TodoItem = ({ item, navigate }: Props) => {
  const { deleteTodo, updateTodo, setLoading } = useContext(commonContext);
  const removeTodo = async (_id: string) => {
    try {
      setLoading(true);
      await deleteTodoApi(_id);
      deleteTodo(_id);
      Toast.show({
        type: "success",
        text1: "Task deleted successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const makeDone = async (_id: string) => {
    try {
      setLoading(true);
      await makeDoneApi(_id);
      updateTodo({ ...item, done: !item.done });
      Toast.show({
        type: "success",
        text1: "Task updated successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={[styles.todoItem,item.urgency ===  URGENCY.HIGH && styles.urgent, item.done && styles.selected]}>
      <View style={styles.todoLeft}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>{item?.description}</Text>
      </View>
      <View style={styles.todoBtns}>
        <Button
          style={styles.button}
          onPress={() =>
            navigate("AddEdit", { type: ADD_EDIT_SCREEN.EDIT, todo: item })
          }
        >
          <PenIcon />
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            Alert.alert('Delete', 'Are you sure you want to delete this task', [
              {
                text: 'No',
                style: 'cancel',
              },
              {text: 'Yes', onPress: () =>   removeTodo(item?._id)},
            ]
          )}}
        >
          <DeleteIcon />
        </Button>
        <Button style={styles.button} onPress={() => makeDone(item._id)}>
          <CheckCircleIcon active={item.done} />
        </Button>
      </View>
    </View>
  );
};

export default TodoItem;
