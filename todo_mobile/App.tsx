import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Navigator } from "./src/navigation/Navigator";
import CommonContextProvider from "./src/contexts/CommonContextProvider";
import Toast from "react-native-toast-message";

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <CommonContextProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
      <Toast visibilityTime={2000} />
    </CommonContextProvider>
  );
}
export default App;
