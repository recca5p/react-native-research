import React, { useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { state } = useAuth();

  state.isLoading = false

  return (
      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : state.userToken == null ? (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        //   options={{
        //     headerRight: () => (
        //         <ThemeSwitchButton/>
        //     ),
        //   }}
          />
        )}
      </Stack.Navigator>
  );
}

export default AppNavigator;
