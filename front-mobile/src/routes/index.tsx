import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import CreateRecord from "../pages/Home/CreateRecord";

const Stack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
          cardStyle: { backgroundColor: '#0B1F34' }
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CreateRecord" component={CreateRecord}/>
        
      </Stack.Navigator>
    </NavigationContainer>
 );
};

export default Routes;