import * as React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import {NavigationContainer} from '@react-navigation/native';
// import AuthenticationProvider from './src/contexts/Authentication';
import configureStore from './src/store';
import { Provider } from 'react-redux';
// Route
import Routes from './src/routes'
const App = () => {
  const store = configureStore();
  return (
    <>
    <Provider store={store}>
    <RootSiblingParent>
      <NavigationContainer>
                <Routes/>
      </NavigationContainer>
    </RootSiblingParent>
    </Provider>
     
    </>
  );
};
export default App;