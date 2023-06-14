import * as React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

// import AuthenticationProvider from './src/contexts/Authentication';
// Route
import Routes from './src/routes';

const theme = {
  ...DefaultTheme
};

const App = () => {
  return (
    <>
      <NavigationContainer>
          <PaperProvider theme={theme} >
                <Routes/>
          </PaperProvider>
      </NavigationContainer>
    </>
  );
};


  
export default App;