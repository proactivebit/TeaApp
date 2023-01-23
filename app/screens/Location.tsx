import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppStackScreenProps } from "../navigation/AppNavigator";

const Location: React.FC<AppStackScreenProps<"Location">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>Location</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <Text>Navigate to Order</Text>
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

export default Location;
