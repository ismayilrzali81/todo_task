import { FC, useContext } from "react";
import { AddEditScreen, TodoScreen } from "../screen";
import { Stack } from "./type";
import Colors from "../theme/colors";
import { commonContext } from "../contexts/CommonContextProvider";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";
import React from "react";

export const Navigator: FC = () => {
  const { loading } = useContext(commonContext);


  return (
    <>
      {loading && (
        <View style={[styles.container, { borderWidth: 1, borderColor: 'red' }]}>
          <ActivityIndicator size="large" color={Colors.purple} />
        </View>
      )}
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: Colors.purple,
          },
          headerTintColor: Colors.white,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{
            title: "TODO APP",
          }}
          name="Home"
          component={TodoScreen}
        />
        <Stack.Screen name="AddEdit" component={AddEditScreen} />
      </Stack.Navigator>
    </>
  );
};
