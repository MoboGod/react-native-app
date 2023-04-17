import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";

export default function App() {
  // const handlePress = () => console.log("Text pressed");
  // const handleNotification = () =>
  //   Alert.alert("My title", "My message", [
  //     { text: "Yes", onPress: () => console.log("Yes") },
  //     { text: "No", onPress: () => console.log("No") },
  //   ]);
  // const handleNotification2 = () =>
  //   Alert.prompt(
  //     "My title",
  //     "My message",
  //     (text) => console.log(text),
  //     "plain-text",
  //     "default value",
  //     ["Yes", "No"]
  //   );

  const [listOfItems, setListOfItems] = useState([
    { id: "1", name: "item 1" },
    { id: "2", name: "item 2" },
    { id: "3", name: "item 3" },
    { id: "4", name: "item 4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((items) => {
      return [{ id: Math.random().toString(), name: text }, ...items];
    });
  };

  const deleteHandler = (id) => {
    setListOfItems((items) => {
      return items.filter((el) => el.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text numberOfLines={2} style={styles.text} onPress={handlePress}>
  //       Hello
  //     </Text>
  //     <Button title={"Try me"} color="green" onPress={handleNotification} />
  //     <Button title={"Try me 2"} color="green" onPress={handleNotification2} />
  //     <TouchableWithoutFeedback onPress={handleNotification}>
  //       <Image
  //         blurRadius={1}
  //         onPress={handlePress}
  //         source={{
  //           width: 100,
  //           height: 100,
  //           uri: "https://i.ytimg.com/vi/7KwtXNoYQEY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLD9tOpsdO8I3s9FE6vW8l7172hTxA",
  //         }}
  //       />
  //     </TouchableWithoutFeedback>
  //     <StatusBar style="auto" />
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({});
