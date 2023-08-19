
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';


const HomeScreen = () => {
  const { t } = useTranslation(); // Use the useTranslation hook

    return (
        <View>
            <Text>{t('welcome')}</Text>
        </View>
    );
};

export default HomeScreen;
