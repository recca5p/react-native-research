import React from 'react';
import { View, Text, Button } from 'react-native';
import AuthContext from '../components/auth/AuthContext';

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

export default HomeScreen;
