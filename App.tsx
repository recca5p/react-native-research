import React, { useReducer, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { authReducer } from './redux/reducers/authReducer';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `AsyncStorage` or any other encrypted storage
        // userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
