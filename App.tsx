import React, {useReducer, useEffect, useState} from 'react';
import {AuthProvider} from './context/AuthContext';
import {authReducer} from './redux/reducers/authReducer';
import AppNavigator from './navigation/AppNavigator';
import {PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeSwitchButton';


export const CLightTheme = {
    roundness: 5,
    colors: {
        "primary": "rgb(120, 69, 172)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(240, 219, 255)",
        "onPrimaryContainer": "rgb(44, 0, 81)",
        "secondary": "rgb(102, 90, 111)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(237, 221, 246)",
        "onSecondaryContainer": "rgb(33, 24, 42)",
        "tertiary": "rgb(128, 81, 88)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(255, 217, 221)",
        "onTertiaryContainer": "rgb(50, 16, 23)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(255, 251, 255)",
        "onBackground": "rgb(29, 27, 30)",
        "surface": "rgb(255, 251, 255)",
        "onSurface": "rgb(29, 27, 30)",
        "surfaceVariant": "rgb(233, 223, 235)",
        "onSurfaceVariant": "rgb(74, 69, 78)",
        "outline": "rgb(124, 117, 126)",
        "outlineVariant": "rgb(204, 196, 206)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(50, 47, 51)",
        "inverseOnSurface": "rgb(245, 239, 244)",
        "inversePrimary": "rgb(220, 184, 255)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(248, 242, 251)",
            "level2": "rgb(244, 236, 248)",
            "level3": "rgb(240, 231, 246)",
            "level4": "rgb(239, 229, 245)",
            "level5": "rgb(236, 226, 243)"
        },
        "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
        "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
        "backdrop": "rgba(51, 47, 55, 0.4)"
    }
};

export const CDarkTheme = {
    roundness: 5,
    colors: {
        "primary": "rgb(220, 184, 255)",
        "onPrimary": "rgb(71, 12, 122)",
        "primaryContainer": "rgb(95, 43, 146)",
        "onPrimaryContainer": "rgb(240, 219, 255)",
        "secondary": "rgb(208, 193, 218)",
        "onSecondary": "rgb(54, 44, 63)",
        "secondaryContainer": "rgb(77, 67, 87)",
        "onSecondaryContainer": "rgb(237, 221, 246)",
        "tertiary": "rgb(243, 183, 190)",
        "onTertiary": "rgb(75, 37, 43)",
        "tertiaryContainer": "rgb(101, 58, 65)",
        "onTertiaryContainer": "rgb(255, 217, 221)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(29, 27, 30)",
        "onBackground": "rgb(231, 225, 229)",
        "surface": "rgb(29, 27, 30)",
        "onSurface": "rgb(231, 225, 229)",
        "surfaceVariant": "rgb(74, 69, 78)",
        "onSurfaceVariant": "rgb(204, 196, 206)",
        "outline": "rgb(150, 142, 152)",
        "outlineVariant": "rgb(74, 69, 78)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(231, 225, 229)",
        "inverseOnSurface": "rgb(50, 47, 51)",
        "inversePrimary": "rgb(120, 69, 172)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(39, 35, 41)",
            "level2": "rgb(44, 40, 48)",
            "level3": "rgb(50, 44, 55)",
            "level4": "rgb(52, 46, 57)",
            "level5": "rgb(56, 49, 62)"
        },
        "surfaceDisabled": "rgba(231, 225, 229, 0.12)",
        "onSurfaceDisabled": "rgba(231, 225, 229, 0.38)",
        "backdrop": "rgba(51, 47, 55, 0.4)"
    }
};

const Stack = createNativeStackNavigator();


export default function App() {
    const [state, dispatch] = useReducer(authReducer, {
        isLoading: true,
        isSignout: false,
        userToken: null
    });
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;


            try {
                // Restore token stored in `AsyncStorage` or any other encrypted storage
                // userToken = await AsyncStorage.getItem('userToken');
            } catch (e) { // Restoring token failed
            }

            dispatch({type: 'RESTORE_TOKEN', token: userToken});
        };

        bootstrapAsync();
    }, []);

    
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
      <ThemeProvider>
      <PaperProvider theme={isDark ? CDarkTheme : CLightTheme}>
        <AuthProvider>
          <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <AppNavigator toggleTheme={toggleTheme} />
          </NavigationContainer>
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
    );
}
