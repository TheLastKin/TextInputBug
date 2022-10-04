/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
};
export default App;
