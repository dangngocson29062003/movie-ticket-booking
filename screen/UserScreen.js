import { SafeAreaView, StyleSheet } from "react-native";

const UserScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
export default UserScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    padding: 0,
    position: "relative",
  },
});
