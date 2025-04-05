import React from "react";
import { Checkbox } from "expo-checkbox";
import { useStore } from "./store";

const MyCustomCheckbox = () => {
  const visibility = useStore((state) => state.visibility);
  const toggler = useStore((state) => state.setVisibility);

  return <Checkbox value={visibility} onValueChange={toggler} />;
};

export default MyCustomCheckbox;
