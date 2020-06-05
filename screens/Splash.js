import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";

const Splash = (props) => {
  console.log("app");
  return (
    <SafeAreaView style={styles.screen}>
      <Animatable.View animation="bounceIn" style={styles.header}>
        <Text style={styles.headerText}>Lets Start React Learning</Text>
        <Text style={styles.headerTextSmall}>Learn Ones Use Everywhere</Text>
      </Animatable.View>
      <Animatable.View animation="bounceInUp" style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("App")}
          color="#000"
          title="Get Start"
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "center",
  },
  headerText: {
    padding: 10,
    fontSize: 40,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
  },
  headerTextSmall: {
    padding: 10,
    fontSize: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  screen: {
    flex: 1,
  },
  footer: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#fff",
  },
});
export default Splash;
