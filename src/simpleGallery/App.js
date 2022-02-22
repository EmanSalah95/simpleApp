import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Gallery from "./Gallery";

export default function GalleyApp() {
  const [label, setLabel] = useState("");
  const handleChange = (text) => {
    setLabel(text);
  };

  const resetLabel = () => {
    setLabel("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`Hello ${label} ! `}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={handleChange}
        value={label}
      />

      <View style={styles.btn}>
        <Button title="reset" color={"purple"} onPress={resetLabel}></Button>
      </View>

      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  header: {
    backgroundColor: "purple",
    width: "100%",
    color: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
  },
});
