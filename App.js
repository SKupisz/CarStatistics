import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Main from "./components/Main.js";
import Menu from "./components/Menu.js";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    safeAreaView: {
      backgroundColor: "white",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    }, 
    darkSpace: {
      flex: 4,
      flexDirection: "column",
      backgroundColor: "#1E2021",
      width: "100%",
      alignItems: "stretch",
      textAlign: "center",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      
      elevation: 21,
    },
    describeSpace: {
      flex: 2.5,
      flexDirection: "column",
      backgroundColor: "#F6F6F6",
      width: "100%",
      alignItems: "stretch",
      textAlign: "center",
    },
    exitBtn: {
      padding: 10,
      borderRadius: 20,
      backgroundColor: "transparent",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center"
    },
    exitBtnContent: {
      width: "100%",
      textAlign: "center",
      fontSize: 18,
      fontFamily: "sans-serif-medium",
      color: "red"
    },
    carPhotoContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "60%",
      alignItems: "stretch",
    },
    carPhoto: {
      marginLeft: "auto",
      marginRight: "auto",
      resizeMode: "contain",
      width: "100%",
      borderRadius: 10,
    },
    carNameContainer: {
      width: "100%",
      position: "relative",
      top: 0,
      alignItems: "stretch",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center"
    }, 
    carName: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 10,
      textAlign: "center",
      width: "100%",
      color: "white",
      fontSize: 28,
      fontFamily: "sans-serif-medium"
    },
    openStatsPressable: {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 6,
      textAlign: "center",
      backgroundColor: "#fff",
      alignItems: "center",
      borderRadius: 7,
      position: "absolute",
      bottom: 30,
      left: "20%"
    },
    openStatsPressableText: {
      fontSize: 14,
      fontFamily: "sans-serif-medium",
      width: "100%",
      textAlign: "center"
    },
    describeElem: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#eee"
    }, 
    describeText: {
      textAlign: "center",
      fontSize: 20,
      fontFamily: "Roboto",
    },
    disabledSection: {
      display: "none"
    },
  });
  const menuStyles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: "white",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      flexDirection: "column"
    },
    menuOptionWrapper: {
      width: "100%",
      flex: 1,
      backgroundColor: "#222",

    },
    menuOption: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center",
      backgroundColor: "#ccc",
      padding: 10,
      borderRadius: 5,
      marginBottom: 4
    },
    menuOptionText: {
      width: "100%",
      textAlign: "center",
      fontSize: 21,
      fontFamily: "sans-serif-medium"
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Menu styles = {menuStyles} stylesForMain = {styles}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
} //<Main styles = {styles}/>
