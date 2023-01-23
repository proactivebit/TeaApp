import {
  BottomTabBar,
  BottomTabBarProps,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import {
  Image,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS, icons, SIZES } from "../constants";
import { Home, Rewards } from "../screens";
import { AppStackParamList, AppStackScreenProps } from "./appNavigator";

export type AppTabsParamList = {
  Home: undefined;
  Rewards: undefined;
  AddOrder: undefined;
  Favourite: undefined;
  Profile: undefined;
};

export type AppScreenProps<T extends keyof AppTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabsParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;

const Tab = createBottomTabNavigator<AppTabsParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.gray3,
        }}
      ></View>
      <BottomTabBar {...props} />
    </View>
  );
};

interface ICustomTabBarButton
  extends PropsWithChildren,
    Pick<TouchableWithoutFeedbackProps, "onPress"> {
  containerStyle?: ViewStyle;
  isFloat?: boolean;
}

const CustomTabBarButton: React.FC<ICustomTabBarButton> = ({
  containerStyle,
  isFloat,
  children,
  onPress,
}: ICustomTabBarButton) => {
  if (isFloat) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Svg width={90} height={61} viewBox="0 0 90 61">
          <Path
            d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
            fill="#4d4d4d"
            fillRule="evenodd"
          />
        </Svg>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: -40,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flex: 1,
            height: 60,
            backgroundColor: COLORS.gray3,
            ...containerStyle,
          }}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "transparent",
          borderTopColor: "transparent",
          height: Platform.OS == "android" ? 60 : 80,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopLeftRadius: SIZES.radius * 5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.bubbleTea}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              containerStyle={{ marginRight: 7 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddOrder"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} isFloat={true} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} containerStyle={{ marginLeft: 7 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.profile}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopRightRadius: SIZES.radius * 5,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
