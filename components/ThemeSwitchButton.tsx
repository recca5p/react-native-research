import React from 'react';
import { IconButton } from 'react-native-paper';

const ThemeSwitchButton = ({ toggleTheme }) => {
  return (
    <IconButton
      onPress={toggleTheme} 
      icon={'theme-light-dark'}
    />
  );
};

export default ThemeSwitchButton;