import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card, Checkbox } from "react-native-paper";

import { styles } from "../../styles";

export default function TodoItem({ todo, toggleCompleted }) {
  const checkHandler = () => {
    toggleCompleted(todo);
  };
  return (
    <>
      { (
          !todo.finished &&
        <Card style={styles.todoCard}>
          <View style={styles.todo}>
            <Text style={todo.finished ? styles.finished : {}}>
              {todo.text}
            </Text>
            <Checkbox
              color="purple"
              uncheckedColor="purple"
              status={todo.finished ? "checked" : "unchecked"}
              onPress={checkHandler}
            />
          </View>
        </Card>
      )}
    </>
  );
}
