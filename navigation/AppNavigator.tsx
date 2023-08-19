import React, { useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import AccountMenuList from '../components/AccountMenuList';

const Stack = createNativeStackNavigator();

export default function AppNavigator({toggleTheme}: any) {
  const { state } = useAuth();

  state.isLoading = false

  const [isDark, setIsDark] = useState(true);

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
              headerRight: () => (
                <ThemeSwitchButton toggleTheme={toggleTheme} />
              ),
            }}
          />
        ) : (
          <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{
            headerRight: () => (
              <AccountMenuList toggleTheme={toggleTheme}/>
            ),
          }}
          />
        )}
      </Stack.Navigator>
  );
}

