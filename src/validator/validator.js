import React from "react";
import { Alert } from "react-native";

export function isNull(data) {
  if (data == "" || data == "null" || data === null) {
    Alert.alert("enter details");
  } else {
    false;
  }
}

export function isValidate(userName, password) {
  if (userName == "" || password == "") {
    Alert.alert("Enter valid Details");
  } else {
    Alert.alert(userName + password);
  }
}
