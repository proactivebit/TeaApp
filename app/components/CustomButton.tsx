import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS } from "../constants";

interface ICustomButton {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  label: string;
  onPress: () => void;
  isPrimaryButton?: boolean;
  isSecondaryButton?: boolean;
}

export const CustomButton = ({
  containerStyle,
  labelStyle,
  label,
  onPress,
  isPrimaryButton,
  isSecondaryButton,
}: ICustomButton) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
        borderWidth: isSecondaryButton ? 1 : 0,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: isPrimaryButton ? COLORS.white : COLORS.primary,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
