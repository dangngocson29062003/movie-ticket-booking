import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function ButtonCustom({ children, style, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonCustom;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5524",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "center",
  },
});
