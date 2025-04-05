import { View, TextInput } from "react-native";
import MyCustomCheckbox from "./checkbox";
import { useStore } from "./store";

const CustomInput = () => {

    const vis = useStore((state) => state.visibility);

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "grey",
        }}
        secureTextEntry={!vis}
        placeholder={!vis ? "You Secret Message!" : "Your Secret Message Has Been Exposed!"}
      />
      <MyCustomCheckbox />
    </View>
  );
};

export default CustomInput;
