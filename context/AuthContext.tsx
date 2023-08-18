import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { authReducer } from '../redux/reducers/authReducer';

type AuthContextType = {
  signIn: (data: { username: string; password: string }) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>; // Replace 'any' with appropriate type
  state: {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
  };
  dispatch: React.Dispatch<any>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const authContext = useMemo(
    () => ({
      signIn: async (data: { username: string; password: string }) => {
        // In a production app, you would send data to the server and handle token
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => {
        // dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data: any) => {
        // Similar to signIn, you would handle token and user data
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};
