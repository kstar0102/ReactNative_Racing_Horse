import * as React from 'react';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
// import CountdownProvider from './src/components/CountDownProvider';

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
            <SafeAreaView style={{flex: 1, paddingTop: 20}}>
                <Routes/>
            </SafeAreaView>
          </PaperProvider>
      </NavigationContainer>
    </>
  );
};


  
export default App;