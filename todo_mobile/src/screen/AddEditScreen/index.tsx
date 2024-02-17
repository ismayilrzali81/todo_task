import { View } from "react-native";
import React, { useContext, useEffect, useMemo } from "react";
import Input from "../../components/Input";
import PurpleButton from "../../components/PurpleButton";
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ADD_EDIT_SCREEN, RootStackParamList } from "../../types";
import { style } from "./style";
import { Controller, useForm } from "react-hook-form";
import { Text } from "../../features";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckBox from "@react-native-community/checkbox";
import { postTodo, updateTodoApi } from "../../api/todo";
import { commonContext } from "../../contexts/CommonContextProvider";
import Toast from "react-native-toast-message";

const AddEditScreen = () => {
  const { goBack } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();
  const { setOptions } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "AddEdit">>();
  const isAdd = useMemo(
    () => params?.type === ADD_EDIT_SCREEN.ADD,
    [params.type]
  );
  const todo = params?.todo;

  const { createTodo, updateTodo } = useContext(commonContext);

  useEffect(() => {
    if (isFocused) {
      if (isAdd) {
        setOptions({
          title: "Add Task",
        });
      } else {
        setOptions({
          title: "Edit Task",
        });
      }
    }
  }, [isFocused]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: todo?.title ?? "",
      description: todo?.description ?? "",
      urgency: todo?.urgency ?? 0,
    },
  });

  const onSubmit = async (data: any) => {
    if (isAdd) {
      const response = await postTodo(data);
      createTodo(response?.task);
      Toast.show({
        type: "success",
        text1: "Task added successfully",
      });
    } else {
      const response = await updateTodoApi(data, todo?._id);
      updateTodo(response);
      Toast.show({
        type: "success",
        text1: "Task updated successfully",
      });
    }
    reset();
    goBack()
  };

  return (
    <View style={{ padding: 15, marginHorizontal: 12 }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} placeholder="Title" />
        )}
        name="title"
      />
      {errors.title && <Text style={style.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value, ref } }) => (
          <Input
            ref={ref}
            onChangeText={onChange}
            value={value}
            placeholder="Description"
          />
        )}
        name="description"
      />
      {errors.description && <Text style={style.error}>This is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox value={!!value} onValueChange={onChange} />
            <Text> Urgency </Text>
          </View>
        )}
        name="urgency"
      />
      {errors.urgency && <Text style={style.error}>This is required.</Text>}

      {isAdd ? (
        <PurpleButton
          text="ADD"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 20 }}
        />
      ) : (
        <View style={style.editBtnsContainer}>
          <PurpleButton
            style={{ flex: 1 }}
            text="Update"
            onPress={handleSubmit(onSubmit)}
          />
          <PurpleButton style={{ flex: 1 }} text="Cancel" onPress={() => goBack()} />
        </View>
      )}
    </View>
  );
};

export default AddEditScreen;
