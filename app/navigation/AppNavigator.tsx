import { NavigatorScreenParams } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { Location, Order, OrderDetail } from "../screens";
import { AppTabsParamList, TabsNavigator } from "./TabsNavigator";

export type AppStackParamList = {
  AppTab: NavigatorScreenParams<AppTabsParamList>;
  Location: undefined;
  Order: undefined;
  OrderDetail: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"AppTab"}
    >
      <Stack.Screen name="AppTab" component={TabsNavigator} />

      <Stack.Screen name="Location" component={Location} />

      <Stack.Screen name="Order" component={Order} />

      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
};
