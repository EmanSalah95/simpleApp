import React from 'react'
import Profile from './profile/profile'
import Users from './users/users'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import UsersProvider from '../context';

const Stack = createNativeStackNavigator();

export default function NavigationComponent() {
  const headerOptions={
    headerStyle: {
      backgroundColor: 'purple',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <UsersProvider>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </UsersProvider>
      
  )
}



