import React from "react";
import { SafeAreaView, View, Text, StyleSheet,TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = (props) => {
  console.log("app");
  return (
    <SafeAreaView style={styles.screen}>
      <Animatable.View animation="bounceIn" style={styles.header}>
        <Text style={styles.headerText}>Lets Start React Learning</Text>
        <Text style={styles.headerTextSmall}>Learn Ones Use Everywhere</Text>
      </Animatable.View>
      <Animatable.View animation="bounceInUp" style={styles.footer}>
      <TouchableOpacity onPress ={()=>props.navigation.navigate('LoginScreen')} style={styles.footerButton}>
    <Text
          color="#000"
          style={styles.button}>Get Start
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
  footerButton:{
    borderRadius:30,
    width:"30%",
    height:50,
    backgroundColor:'#fff',
    alignSelf:"flex-end",
    margin:10,
  },
  button: {
    color:"#000",
    justifyContent:"center",
    margin:10,
    alignSelf:"center",
    fontSize:20
  },
});
export default Splash;
