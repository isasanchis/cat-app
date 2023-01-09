import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Facts from './Facts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="Facts" component={Facts} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
