import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = (props) => {
  console.log("app");
  return (
    <SafeAreaView style={styles.screen}>
      <Animatable.View animation="bounceIn" style={styles.header}>
        <Text style={styles.headerText}> React Native</Text>
        <Text style={styles.headerTextSmall}>Learn once, write anywhere.

</Text>
      </Animatable.View>
      <Animatable.View animation="bounceInUp" margin={20}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginScreen")}
          style={styles.footerButton}
        >
          <Text color="#fff" style={styles.button}>
            Get Start
          </Text>
        </TouchableOpacity>
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
    fontWeight: 'bold',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
  },
  headerTextSmall: {
    padding: 10,
    fontSize: 20,
    marginStart:10,
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
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerButton: {
    borderRadius: 30,
    width: "100%",
    height: 50,
    margin:20,
    backgroundColor: "#000",
    alignSelf: "center",
    justifyContent:"center"
  },
  button: {
    color: "#fff",
    justifyContent: "center",
    margin:10,
    alignSelf: "center",
    fontSize: 20,
  },
});
export default Splash;
