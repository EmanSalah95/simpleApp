import React, { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { styles } from "../styles";
import UserRow from "./userRow";
import { UsersContext } from "../../context";
import { getUsers} from "../actions";
import { ActivityIndicator } from "react-native-paper";

export default function Users({ navigation }) {
  const { state, dispatch } = useContext(UsersContext);

  useEffect(async() => {
    dispatch(await getUsers());
  }, []);

  return (
    <View style={styles.listCont}>
      {state?.users?.length > 0 ? (
        <FlatList
          style={styles.usersLis}
          data={state.users}
          renderItem={({ item }) => (
            <UserRow item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ):
      <ActivityIndicator style={styles.mt} animating={true} color='purple' />
    }
    </View>
  );
}
