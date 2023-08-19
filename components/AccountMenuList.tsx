import React from 'react';
import { Button, Divider, IconButton, Menu } from 'react-native-paper';

const AccountMenuList = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
  return (
    <Menu 
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Show menu</Button>}>
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
    </Menu>
  );
};

export default AccountMenuList;