import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
} from "react-native";

export default function LOGIN() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text styles={styles.header}>"Welcome Back!!"</Text>
      </View>
      <View style={styles.main}>
        <TextInput placeholder="Enter Email" style={styles.textFields} />
        <TextInput placeholder="Enter Password" style={styles.textFields} />
        <Button
          title="LOGIN"
          style={styles.buttonStyle}
          backgroundColor="#f5b642"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#edae39",
    justifyContent: "center",
    alignContent: "center",
  },
  main: {
    flex: 2,
    backgroundColor: "#d4cec5",
  },
  textFields: {
    margin: 10,
    justifyContent: "center",
    alignContent: "stretch",
    borderRadius: 10,
    borderWidth: 2,
    borderBottomColor: "#000000",
    padding: 20,
  },
  buttonStyle: {
    borderRadius: 2,
    padding: 20,
    margin: 10,
    backgroundColor: "#edae39",
  },
});
