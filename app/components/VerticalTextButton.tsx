import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS, FONTS } from "../constants";

interface IVerticalTextButton {
  containerStyle?: ViewStyle;
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const VerticalTextButton = ({
  containerStyle,
  label,
  selected,
  onPress,
}: IVerticalTextButton) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        transform: [{ rotate: "-90deg" }],
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected ? COLORS.white : COLORS.lightGreen,
          ...FONTS.body2,
          fontSize: 20,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
