import React from "react";
import { View, Text, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Checkbox } from "react-native-paper";

import { styles } from "../../styles";
import TodoHeader from "./todoHeader";
import TodoItem from "./todoItem";

export default function TodoList({ todos, toggleCompleted }) {
  const checkHandler = (todo) => {
    toggleCompleted(todo);
  };
  return (
    <View style={styles.listCont}>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({item:todo}) => <TodoItem todo={todo} toggleCompleted={toggleCompleted}/>}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={<TodoHeader todos={todos}/>}
      />
    </View>
  );
}
