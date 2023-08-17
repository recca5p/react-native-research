import React from 'react';

export type AuthContextType = {
  signIn: (data: { username: string; password: string }) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>; // Replace 'any' with appropriate type
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
