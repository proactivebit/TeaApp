import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { useCustomFonts } from "./hooks";
import { AppNavigator } from "./navigation/AppNavigator";
import store from "./stores/store";

export const AppExpo = () => {
  const [fontsLoaded] = useCustomFonts();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {fontsLoaded && <AppNavigator />}
      </NavigationContainer>
    </Provider>
  );
};
