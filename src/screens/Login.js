import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { baseStyles } from "../styles/baseStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = (props) => {
  const { navigation } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      if (jsonValue != null) {
        let parsed = JSON.parse(jsonValue);
        if (userName == parsed.userId && password == parsed.userPass) {
          props.navigation.navigate("HomeScreen");
        } else {
          alert("credential not match!");
        }
      } else {
        alert("null");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <View style={baseStyles.screen}>
      <View style={styles.header}>
        <Text color="#fff" style={styles.headerText}>
          Welcome!
        </Text>
      </View>
      <View style={styles.credential}>
        <Text fontSize="20" style={baseStyles.headerUsername}>
          User Name
        </Text>
        <TextInput
          maxLength={20}
          style={baseStyles.credentialText}
          onChangeText={(userName) => setUserName(userName)}
          headerText="enter username"
        />
        <Text fontSize="20" style={baseStyles.headerUsername}>
          Password
        </Text>
        <TextInput
          maxLength={20}
          style={baseStyles.credentialText}
          onChangeText={(password) => setPassword(password)}
          headerText="enter password"
        />
        <View style={baseStyles.submit}>
          <Button
            title="Login"
            color="#fff"
            style={baseStyles.submit}
            onPress={() => getData()}
          />
        </View>
        <Text
          style={styles.signUp}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          New User?Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flex: 1,
    margin: 10,
    color: "#000",
  },
  headerText: {
    fontSize: 40,
    color: "#fff",
    marginTop: "20%",
  },
  signUp: {
    fontSize: 18,
    alignSelf: "flex-end",
    marginTop: 10,
    marginEnd: "10%",
  },
  credential: {
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
  },
});
export default Login;
