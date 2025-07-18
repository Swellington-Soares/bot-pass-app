import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import BatLogoImage from "../../../assets/batman-logo.png";

import styles from "./Style";

export function BatLogo() {
  const { width } = useWindowDimensions();
  return (
    <Image
      source={BatLogoImage}
      style={{ width: width * 0.8, height: width * 0.6, resizeMode: "contain" }}
    />
  );
}
