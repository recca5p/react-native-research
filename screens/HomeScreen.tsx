
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const HomeScreen = () => {

    return (
        <View>
            <Text>This is the Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
