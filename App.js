import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ArrayColors } from "./src/components/Rawbox";
import ColorBox from "./src/components/Colorbox";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ArrayColors}
        keyExtractor={(item) => item.hex}
        renderItem={({ item }) => (
          <ColorBox hexValues={item.hex} name={item.name} />
        )}
        ListHeaderComponent={
          <Text style={styles.textHeading}>List of Header Components</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
  },
  textHeading: {
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
});
