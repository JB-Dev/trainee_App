import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NameItem = (props) => {
  return (
    <View>
      <Text style={styles.listText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listText: {
    color: "#FFF",
    margin: 5,
  },
});
export default NameItem;
