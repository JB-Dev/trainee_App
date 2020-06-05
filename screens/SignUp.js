import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { baseStyles } from "../styles/baseStyle";

export default function SignUp() {
  return (
    <View style={baseStyles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter Details</Text>
      </View>
      <View style={styles.credential}>
        <Text fontSize="20" style={baseStyles.headerUsername}>
          User Name
        </Text>
        <TextInput
          style={baseStyles.credentialText}
          headerText="enter username"
        />
        <Text fontSize="20" style={baseStyles.headerUsername}>
          Password
        </Text>
        <TextInput
          style={baseStyles.credentialText}
          secureTextEntry={true}
          headerText="enter password"
        />
        <View style={baseStyles.submit}>
          <Button title="Login" color="#fff" style={styles.submit} />
        </View>
        <Text style={styles.signUp}>New User?Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 30,
    color: "#000",
  },
});
