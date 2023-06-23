import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import TopScreen from '../screens/TopScreen';
/**
 * Pasture Screen
 */
import PastureScreen from '../screens/PastureScreen';
import PastureRegistration from '../screens/PastureScreens/PastureRegistration';
import PastureNameScreen from '../screens/PastureScreens/PastureNameScreen';
import HorseChoiceScreen from '../screens/PastureScreens/HorseChoiceScreen';
import HorseNameScreen from '../screens/PastureScreens/HorseNameScreen';
import UpbringingScreen from '../screens/PastureScreens/UpbringingScreen';
import InstitutionScreen from '../screens/PastureScreens/InstitutionScreen';
import OfficeScreen from '../screens/PastureScreens/OfficeScreen';
import RacetrackScreen from '../screens/PastureScreens/RacetrackScreen';
import WorkingHorseScreen from '../screens/PastureScreens/WorkingHorseScreen';
import ReservationScreen from '../screens/PastureScreens/RanchTapScreens/ReservationScreen';
/**
 * Stall SCreen
 */
import StableScreen from '../screens/StableScreen';
import Training from '../screens/StableScreens/Training';
import RaceRegistation from '../screens/StableScreens/RaceRegistation';
// /////////////////////////


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator>
          <Stack.Screen
            name={'TopScreen'}
            component={TopScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name={'PastureScreen'} component={PastureScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'PastureRegistration'} component={PastureRegistration} options={{ headerShown: false }}/>
        <Stack.Screen name={'HorseChoiceScreen'} component={HorseChoiceScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'UpbringingScreen'} component={UpbringingScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name={'PastureNameScreen'} component={PastureNameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'HorseNameScreen'} component={HorseNameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'InstitutionScreen'} component={InstitutionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'OfficeScreen'} component={OfficeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'RacetrackScreen'} component={RacetrackScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'WorkingHorseScreen'} component={WorkingHorseScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'StallScreen'} component={StableScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'Training'} component={Training} options={{ headerShown: false }}/>
        <Stack.Screen name={'RaceRegistation'} component={RaceRegistation} options={{ headerShown: false }}/>
        <Stack.Screen name={'ReservationScreen'} component={ReservationScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </>
  );
};

export default AppStack;