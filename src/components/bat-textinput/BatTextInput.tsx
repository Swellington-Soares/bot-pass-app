import Style from "./Style";
import { TextInput } from "react-native";

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return <TextInput style={Style.inputer} placeholder="Password" value={props.pass} />;
}
