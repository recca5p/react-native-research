import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Button, TextInput, Text,Surface } from 'react-native-paper';

function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const { signIn } = useContext(AuthContext);

  return (
    <Surface style={styles.container}>
      <Text variant="headlineSmall">Sign In</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword} // Toggle based on showPassword state
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
          />
        }
      />
      <Button mode="contained" onPress={() => signIn({ username, password })}>
        Sign In
      </Button>
    </Surface>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignInScreen;
