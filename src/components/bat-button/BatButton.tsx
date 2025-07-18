import React, { useState } from "react";
import { styles } from "./Style";
import { Pressable, Text } from "react-native";
import { BatTextInput } from "@components/bat-textinput/BatTextInput";
import generatePassword from "@services/password-service";
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [ pass, setPass ] = useState('')

  function handleGenerate() {
    let generatedPassword = generatePassword()
    setPass(generatedPassword)
  }

  async function handleCopyButton() {
    await Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass}/>
      <Pressable style={styles.buttonContainer} onPress={handleGenerate}>
        <Text style={styles.buttonText}>💫 GENERATE</Text>
      </Pressable>

      <Pressable style={styles.buttonContainer} onPress={handleCopyButton}>
        <Text style={styles.buttonText}>♥️ COPY</Text>
      </Pressable>
    </>
  );
}
