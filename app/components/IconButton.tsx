import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { COLORS } from "../constants";

interface IIconButton {
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
  icon: ImageSourcePropType;
  onPress: () => void;
}

export const IconButton = ({
  containerStyle,
  iconStyle,
  icon,
  onPress,
}: IIconButton) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 25, height: 25, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};
