import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  submit: {
    backgroundColor: "#000",
    alignSelf: "flex-end",
    width: "40%",
    borderRadius: 30,
    justifyContent: "flex-end",
    marginEnd: "10%",
    marginTop: "10%",
    color: "#fff",
  },
  headerUsername: {
    fontSize: 20,
    marginStart: "10%",
    marginTop: 40,
    marginBottom: 20, 
  },
  credentialText: {
    color: "#fff",
    fontSize: 20,
    height: 60,
    borderRadius: 30,
    marginStart: "10%",
    padding: 20,
    marginEnd: "10%",
    backgroundColor: "#000",
    alignContent: "center",
    justifyContent: "center",
  },
});
