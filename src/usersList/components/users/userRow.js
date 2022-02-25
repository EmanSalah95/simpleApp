import React from "react";
import { Text, View } from "react-native";
import { Avatar, Button, Card} from "react-native-paper";
import { styles } from "../styles";
export default function UserRow({ item, navigation }) {
  return (
    <Card style={styles.userCard}>
      <View style={styles.cardContent}>
        <Avatar.Image
          style={styles.imgCard}
          size={80}
          source={{ uri: item.avatar }}
        />
        <Text
          style={styles.cardName}
        >{`${item.first_name} ${item.last_name}`}</Text>
        <Button
          mode="contained"
          color="purple"
          style={styles.cardBtn}
          onPress={() =>
            navigation.navigate({
              name: "Profile",
              params: {
                id: item.id,
              },
            })
          }
        >
          View
        </Button>
      </View>
    </Card>
  );
}
