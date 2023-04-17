import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.id)}>
      <Text style={styles.text}>{el.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "red",
    margin: 5,
  },
});
