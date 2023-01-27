import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton, TabButton } from "../components";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../constants";
import { useAppSelector } from "../hooks";
import { AppStackScreenProps } from "../navigation/AppNavigator";

const Location: React.FC<AppStackScreenProps<"Location">> = ({
  navigation,
}) => {
  const theme = useAppSelector((state) => state.theme.appTheme);
  const [selectedTab, setSelectedTab] = React.useState(0);

  function renderHeader() {
    return (
      <SafeAreaView
        style={{
          height: 120,
          backgroundColor: COLORS.primary,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            alignItems: "center",
          }}
        >
          <IconButton
            icon={icons.leftArrow}
            onPress={() => navigation.goBack()}
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: COLORS.white, ...FONTS.h1 }}>Locations</Text>
          </View>
          <View style={{ width: 25 }}></View>
        </View>
      </SafeAreaView>
    );
  }

  function renderTopBarSection() {
    return (
      <View style={{ flexDirection: "row" }}>
        {/* Nearby */}
        <TabButton
          containerStyle={{ width: 100 }}
          label="Nearby"
          selected={selectedTab === 0}
          onPress={() => setSelectedTab(0)}
        />
        {/* Previous */}
        <TabButton
          containerStyle={{ width: 100 }}
          label="Previous"
          selected={selectedTab === 1}
          onPress={() => setSelectedTab(1)}
        />
        {/* Favorite */}
        <TabButton
          containerStyle={{ width: 100 }}
          label="Favorite"
          selected={selectedTab === 2}
          onPress={() => setSelectedTab(2)}
        />
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          height: 50,
          paddingHorizontal: SIZES.padding,
          borderRadius: 25,
          backgroundColor: COLORS.lightGreen2,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ flex: 1, height: 50, color: COLORS.black, ...FONTS.body3 }}
          placeholder="enter your city, state or zip code"
          placeholderTextColor={COLORS.lightGray2}
        ></TextInput>
        <Image
          source={icons.search}
          style={{ width: 30, height: 30, tintColor: COLORS.lightGray2 }}
        />
      </View>
    );
  }

  function renderLocationList() {
    return (
      <FlatList
        style={{ marginTop: SIZES.radius, paddingHorizontal: SIZES.radius }}
        data={dummyData.locations}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginBottom: SIZES.radius,
                borderRadius: SIZES.radius * 2,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                backgroundColor: theme.cardBackgroundColor,
              }}
              onPress={() =>
                navigation.navigate("Order", {
                  selectedLocation: item,
                })
              }
            >
              {/* Name & Bookmark */}
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, color: theme.textColor, ...FONTS.h2 }}>
                  {item.title}
                </Text>
                <Image
                  source={
                    item.bookmarked ? icons.bookmarkFilled : icons.bookmark
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: item.bookmarked ? COLORS.red2 : COLORS.white,
                  }}
                />
              </View>
              {/* Address */}
              <View style={{ marginTop: SIZES.base, width: "80%" }}>
                <Text
                  style={{
                    color: theme.textColor,
                    ...FONTS.body3,
                    lineHeight: 21,
                  }}
                >
                  {item.address}
                </Text>
              </View>
              {/* Operation Hours */}
              <View style={{ marginTop: SIZES.base }}>
                <Text
                  style={{
                    color: theme.textColor,
                    ...FONTS.body5,
                    lineHeight: 16,
                  }}
                >
                  {item.operation_hours}
                </Text>
              </View>
              {/* Services */}
              <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                {/* Pick Up */}
                <View
                  style={{
                    borderColor: theme.textColor,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                  }}
                >
                  <Text style={{ color: theme.textColor, ...FONTS.body3 }}>
                    Pick-Up
                  </Text>
                </View>
                {/* Delivery */}
                <View
                  style={{
                    borderColor: theme.textColor,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    marginLeft: 5,
                  }}
                >
                  <Text style={{ color: theme.textColor, ...FONTS.body3 }}>
                    Delivery
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      <View
        style={{
          flex: 1,
          backgroundColor: theme.backgroundColor,
          marginTop: -20,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          padding: SIZES.padding,
        }}
      >
        {renderTopBarSection()}
        {renderSearchBar()}
        {renderLocationList()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Location;
