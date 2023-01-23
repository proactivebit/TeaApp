import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppStackScreenProps } from "../navigation/AppNavigator";

const OrderDetail: React.FC<AppStackScreenProps<"OrderDetail">> = () => {
  return (
    <View style={styles.container}>
      <Text>OrderDetail</Text>
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

export default OrderDetail;
