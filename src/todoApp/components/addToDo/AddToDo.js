import React, { Component, useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { styles } from "../../styles";

export const AddToDo=({todoHandler}) =>{
  const [text, setText] = useState("");

  const addHandler=()=>{
      let todo={
          text,
          finished:false
      }
    todoHandler(todo);
      setText('');
  }

  return (
    <View>
      <View style={styles.headerCont}>
        <Text style={styles.header}>Todo App</Text>
      </View>

      <View style={styles.addCont}>
        <TextInput
          style={styles.addInput}
          label="new todo"
          value={text}
          mode='outlined'
          activeOutlineColor='purple'
          onChangeText={(text) => setText(text)}
        />
        <Button
          mode="contained"
          color="purple"
          style={styles.btn}
          onPress={addHandler}
          disabled={text==''}
        >
          Add
        </Button>
      </View>
    </View>
  );
}

export default  AddToDo;