import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppStackScreenProps } from "../navigation/AppNavigator";

const Order: React.FC<AppStackScreenProps<"Order">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order</Text>

      <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
        <Text>Navigate to OrderDetail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Order;
