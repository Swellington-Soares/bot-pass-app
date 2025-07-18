import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appTitle: {
    color: "orange",
    fontSize: 45,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#585555ff",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    padding: 16
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#7c6f6fff",
    paddingTop: 20,
    width: "100%",
  },
  inputContainer: {
    marginTop: 20,
    width: "80%",
    height: "auto",
    alignItems: "center",
    flexDirection: "column",
  },
});
