import * as React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


// import AuthenticationProvider from './src/contexts/Authentication';
// Route
import Routes from './src/routes';


const App = () => {
  return (
    <>
      <NavigationContainer>
                <Routes/>
      </NavigationContainer>
    </>
  );
};


  
export default App;