import React from "react";
import { styles } from "./Style";
import { Button, Pressable, Text, View } from "react-native";
import { BatTextInput } from "@components/bat-textinput/BatTextInput";

export function BatButton() {
  return (
    <>
      <BatTextInput />
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>💫 GENERATE</Text>
      </Pressable>

      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>♥️ COPY</Text>
      </Pressable>
    </>
  );
}
