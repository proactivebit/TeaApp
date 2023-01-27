import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setTheme } from "../stores/themeSlice";

const HeaderBar = () => {
  const theme = useAppSelector((state) => state.theme.appTheme);
  const dispatch = useAppDispatch();

  function toggleThemeHandler() {
    if (theme.name == "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  }

  return (
    <SafeAreaView
      style={{
        height: 150,
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
      }}
    >
      {/* Greetings */}
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Wendy,</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!</Text>
      </View>
      {/* Toggle View */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginHorizontal: SIZES.padding,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightPurple,
        }}
        onPress={toggleThemeHandler}
      >
        {/* Sun */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(theme.name == "light" ? styles.selectedLightModeStyle : {}),
          }}
        >
          <Image
            source={icons.sunny}
            style={{ height: 30, width: 30, tintColor: COLORS.white }}
          />
        </View>
        {/* Moon */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(theme.name == "dark" ? styles.selectedNightModeStyle : {}),
          }}
        >
          <Image
            source={icons.night}
            style={{ height: 30, width: 30, tintColor: COLORS.white }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});

export default HeaderBar;
