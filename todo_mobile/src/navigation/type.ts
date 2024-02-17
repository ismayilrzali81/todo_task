import type { NavigationProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


export type StackParamsType = {
  Home: undefined;
  AddEdit: undefined
};


export type StackNavigation = NavigationProp<StackParamsType>

export const Stack = createStackNavigator<StackParamsType>()
