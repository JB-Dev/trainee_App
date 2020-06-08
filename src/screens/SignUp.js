import React, { useState, isValidElement } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { baseStyles } from "../styles/baseStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function isVerify(userName, passWord) {
    if (userName == "" || passWord == "") {
      Alert.alert("Enter Valid Details");
    } else {
      props.navigation.navigate("LoginScreen", { userValue: userName, passValue: passWord });
    }
  }

  return (
    <SafeAreaView style={baseStyles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter Details</Text>
      </View>
      <View style={styles.credential}>
        <Text fontSize="20" style={baseStyles.headerUsername}>
          Full Name
        </Text>
        <TextInput style={baseStyles.credentialText} />
        <Text fontSize="20" style={baseStyles.headerUsername}>
          Email
        </Text>
        <TextInput
          style={baseStyles.credentialText}
          onChangeText={(user) => setUser(user)}
        />
        <Text fontSize="20" style={baseStyles.headerUsername}>
          Password
        </Text>
        <TextInput
          style={baseStyles.credentialText}
          onChangeText={(pass) => setPass(pass)}
        />
        <View style={baseStyles.submit}>
          <Button
            color="#fff"
            title="Ok"
            onPress={() => isVerify(user, pass)}
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.signIn}>Already Account?Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#000",
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    margin: 10,
  },
  credential: {
    flex: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
  },
  signIn: {
    fontSize: 18,
    alignSelf: "flex-end",
    marginTop: 10,
    marginEnd: "10%",
  },
});

export default SignUp;
