import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import TopScreen from '../screens/TopScreen';
import horizontalAnimation from './horizontalAnimation';
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
import RaceResults from '../screens/StableScreens/RaceResults';
import Institution from '../screens/StableScreens/Instituion';
import JockeyTraingin from '../screens/StableScreens/Jockeytraingin';
import JocTraining from '../screens/StableScreens/Jockeytraingin/JocTraining';
import RaceCourse from '../screens/StableScreens/RaceCourse';
import TrainingReservationScreen from '../screens/StableScreens/Training/TrainingReservationScreen';
import JockeyReservationScreen from '../screens/StableScreens/Jockeytraingin/JockeyReservationScreen';
/**
 * RaceCourse Screen
 */
import RaceCourseScreen from '../screens/RaceCourseScreen';
import CourseTables from '../screens/StableScreens/RaceRegistation/RegisterCourse';


const Stack = createNativeStackNavigator();
const ModalStack = createStackNavigator();
const AppStack = () => {
  return (
    <>
      <ModalStack.Navigator>
          <ModalStack.Screen
            name={'TopScreen'}
            component={TopScreen}
            options={{ headerShown: false }}
        />
        {/* PASTURE */}
        <ModalStack.Screen name={'PastureScreen'} component={PastureScreen} options={ horizontalAnimation }/>
        <ModalStack.Screen name={'PastureRegistration'} component={PastureRegistration} options={horizontalAnimation}/>
        <ModalStack.Screen name={'HorseChoiceScreen'} component={HorseChoiceScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'UpbringingScreen'} component={UpbringingScreen} options={horizontalAnimation}/> 
        <ModalStack.Screen name={'PastureNameScreen'} component={PastureNameScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'HorseNameScreen'} component={HorseNameScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'InstitutionScreen'} component={InstitutionScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'OfficeScreen'} component={OfficeScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'RacetrackScreen'} component={RacetrackScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'WorkingHorseScreen'} component={WorkingHorseScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'ReservationScreen'} component={ReservationScreen} options={horizontalAnimation}/>
        {/* STALBE */}
        <ModalStack.Screen name={'StallScreen'} component={StableScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'Training'} component={Training} options={horizontalAnimation}/>
        <ModalStack.Screen name={'RaceRegistation'} component={RaceRegistation} options={horizontalAnimation}/>
        <ModalStack.Screen name={'RaceResults'} component={RaceResults} options={horizontalAnimation}/>
        <ModalStack.Screen name={'Institution'} component={Institution} options={horizontalAnimation}/>
        <ModalStack.Screen name={'JockeyTraingin'} component={JockeyTraingin} options={horizontalAnimation}/>
        <ModalStack.Screen name={'JocTraining'} component={JocTraining} options={horizontalAnimation}/>
        <ModalStack.Screen name={'RaceCourse'} component={RaceCourse} options={horizontalAnimation}/>
        <ModalStack.Screen name={'TrainingReservationScreen'} component={TrainingReservationScreen} options={horizontalAnimation}/>
        <ModalStack.Screen name={'JockeyReservationScreen'} component={JockeyReservationScreen} options={horizontalAnimation}/>
      {/* RaceCourse */}
      <ModalStack.Screen name={'RaceCourseScreen'} component={RaceCourseScreen} options={horizontalAnimation}/>
      <ModalStack.Screen name={'CourseTables'} component={CourseTables} options={horizontalAnimation}/>

      </ModalStack.Navigator>
    </>
  );
};

export default AppStack;
