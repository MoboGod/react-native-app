import React, { useState } from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="What todo"
      />
      <Button
        color="green"
        title="Add task"
        onPress={() => onSubmin(text)}
        disabled={!text.trim().length}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: "20%",
    width: "60%",
  },
});
