import React, {  useContext, useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator, Avatar, Card, Paragraph, Title } from "react-native-paper";
import { UsersContext } from "../../context";
import { clearProfile, getProfile } from "../actions";
import { styles } from "../styles";

export default function Profile({ route }) {
  const { id } = route.params;
  const { state, dispatch } = useContext(UsersContext);

  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getProfile(id));
    };
    resolveAction();

    return () => {
      dispatch(clearProfile());
    };
  }, []);
  const { email, avatar, first_name, last_name } = state?.profile;
   if(state.profile.id)
  return (
    <View style={styles.profContainer}>
      <Card style={styles.dataCont}>
        <Avatar.Image
          style={styles.profileImage}
          size={150}
          source={{ uri: avatar }}
        />
        <Title color='purple' style={styles.selfCenter}> {`${first_name} ${last_name}`}</Title>
        <Paragraph style={styles.selfCenter}> {email} </Paragraph>
      </Card>
    </View>
  );
  return<ActivityIndicator style={styles.mt} animating={true} color='purple' />
}
