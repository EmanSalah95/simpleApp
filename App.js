import "react-native-gesture-handler";
import GalleyApp from "./src/simpleGallery/App";
import TodoApp from "./src/todoApp/TodoApp";
import { NavigationContainer } from "@react-navigation/native";
import UsersApp from "./src/usersList/components/UsersApp";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {  fontWeight: "bold" ,fontSize: 15},
          tabBarStyle: {
            backgroundColor: "purple",
            borderBottomColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Users List"
          component={UsersApp}
          indicatorStyle={{ backgroundColor: "white" }}
        />
        <Tab.Screen name="Todo" component={TodoApp} />
        <Tab.Screen name="Gallery" component={GalleyApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
