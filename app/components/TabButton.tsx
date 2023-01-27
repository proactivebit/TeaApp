import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { COLORS, FONTS } from "../constants";

interface ITabButton {
  containerStyle?: ViewStyle;
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export const TabButton = ({
  containerStyle,
  label,
  selected,
  onPress,
}: ITabButton) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", ...containerStyle }}
      onPress={onPress}
    >
      {/* Text */}
      <Text
        style={{
          color: selected ? COLORS.primary : COLORS.gray,
          ...FONTS.body2,
          fontSize: 18,
        }}
      >
        {label}
      </Text>
      {/* Line */}
      <View
        style={{
          marginTop: selected ? 3 : 4,
          height: selected ? 4 : 2,
          width: "100%",
          backgroundColor: selected ? COLORS.primary : COLORS.gray,
        }}
      ></View>
    </TouchableOpacity>
  );
};
