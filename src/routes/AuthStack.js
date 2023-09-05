// Navigation
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/authScreen/loginScreen";
import AppStack from "./AppStack";
// Screen

import horizontalAnimation from "./horizontalAnimation";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={horizontalAnimation}
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        options={horizontalAnimation}
        name="AppStack"
        component={AppStack}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
