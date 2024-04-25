import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColorBox(props) {
  const bacgroundColor = {
    backgroundColor: props.hexValues,
  };
  return (
    <View style={[styleList.boxModel, bacgroundColor]}>
      <Text>
        {props.hexValues} {props.name}
      </Text>
    </View>
  );
}

const styleList = StyleSheet.create({
  boxModel: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    height: 40,
    borderRadius: 7,
  },
});
