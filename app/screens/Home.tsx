import { StyleSheet, View } from "react-native";
import { HeaderBar } from "../components";
import { AppScreenProps } from "../navigation/TabsNavigator";

const Home: React.FC<AppScreenProps<"Home">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
