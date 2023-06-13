// Navigation
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/authScreen/LoginScreen";
import AppStack from "./AppStack";
// Screen

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{ headerShown: false }} 
        name="Login" 
        component={LoginScreen}/>

    <Stack.Screen 
        options={{ headerShown: false }} 
        name="AppStack"
        component={AppStack}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
