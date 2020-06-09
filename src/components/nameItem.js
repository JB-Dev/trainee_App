import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const NameItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete.bind(props.id)}>
      <View>
        <Text style={styles.listText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listText: {
    color: "#FFF",
    margin: 10,
    fontSize: 20,
  },
});
export default NameItem;
