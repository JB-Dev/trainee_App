import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import NameItem from "../components/nameItem";
import * as Animatable from "react-native-animatable";

export default function AddData() {
  const [enterName, setEnterName] = useState("");
  const [name, setName] = useState([]);
  const nameInputHandler = (enterName) => {
    setEnterName(enterName);
  };
  const addNameHandler = () => {
    setName((currentName) => [
      ...currentName,
      { key: Math.random().toString, value: enterName },
    ]);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Animatable.View animation="fadeInUp" style={styles.header}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={nameInputHandler}
          value={enterName}
        />
        <Button title="ADD" onPress={addNameHandler} />
      </Animatable.View>
      <View style={styles.listData}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={name}
          renderItem={(itemData) => <NameItem title={itemData.item.value} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listData: {
    flex: 2,
    color: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#000",
  },
});
