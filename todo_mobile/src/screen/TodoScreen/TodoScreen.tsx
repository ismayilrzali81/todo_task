import { FlatList, View } from "react-native";
import styles from "./style";
import TodoItem from "../../components/TodoItem/TodoItem";
import { Button, Text } from "../../features";
import { PlusIcon } from "../../assets/icons";
import BottomFilter from "../../components/BottomFilter/BottomFilter";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../navigation/type";
import { ADD_EDIT_SCREEN, Filter } from "../../types";
import { useContext, useEffect, useMemo } from "react";
import {
  getAllUrgentTodosAPI,
  getDoneTodosAPI,
  getTodoAPI,
} from "../../api/todo";
import { commonContext } from "../../contexts/CommonContextProvider";
import React from "react";

const TodoScreen = () => {
  const { navigate } = useNavigation<StackNavigation>();
  const { todos, setAllTodo, filter, setLoading } = useContext(commonContext);

  const getAllTodos = async () => {
    try {
      setLoading(true);
      const response = await getTodoAPI();
      setAllTodo(response.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllDoneTodos = async () => {
    try {
      setLoading(true);
      const response = await getDoneTodosAPI();
      setAllTodo(response.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllUrgentTodos = async () => {
    try {
      setLoading(true);
      const response = await getAllUrgentTodosAPI();
      setAllTodo(response.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter === Filter.ALL) {
      getAllTodos();
    } else if (filter === Filter.DONE) {
      getAllDoneTodos();
    } else if (filter === Filter.URGENCY) {
      getAllUrgentTodos();
    }
  }, [filter]);

  const memoizedTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === Filter.DONE) {
        return todo.done;
      } else if (filter === Filter.URGENCY) {
        return !todo.done;
      } else {
        return true;
      }
    });
  }, [filter, todos]);
  return (
    <View style={styles.flex_1}>
      <View style={styles.container}>
        {memoizedTodos.length ? (
          <FlatList
            keyExtractor={(item) => item._id.toString()}
            data={memoizedTodos}
            renderItem={({ item }) => (
              <TodoItem item={item} navigate={navigate} />
            )}
            contentContainerStyle={{ gap: 25 }}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text> Empty todo</Text>
        )}
        <Button
          onPress={() => navigate("AddEdit", { type: ADD_EDIT_SCREEN.ADD })}
          style={styles.addBtn}
        >
          <PlusIcon />
        </Button>
      </View>
      <BottomFilter />
    </View>
  );
};

export default TodoScreen;
