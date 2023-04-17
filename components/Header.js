import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>TODO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "gray",
  },
  text: {
    fontSize: 18,
    color: "yellow",
    textAlign: "center",
  },
});
