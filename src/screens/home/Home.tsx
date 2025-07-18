import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import { BatLogo } from "@components/bat-logo/Batlogo";
import { BatTextInput } from "@components/bat-textinput/BatTextInput";
import { BatButton } from "@components/bat-button/BatButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>BAT PASS GENERATOR</Text>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View  style={styles.inputContainer}>        
        {/* <BatTextInput /> */}
        <BatButton />
      </View>      
      <StatusBar style="light" />
    </View>
  );
}
