import React, { useContext } from 'react';
import { Button, Divider, IconButton, Menu } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';


const AccountMenuList = ({toggleTheme}: any) => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const { signOut } = useContext(AuthContext);

    return (
        <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<IconButton onPress={openMenu} icon={'dots-vertical'}/>}
        >
            <Menu.Item
                leadingIcon={'logout'}
                onPress={signOut}
                title="Sign Out"
            />
            <Menu.Item 
                leadingIcon={'theme-light-dark'}
                title="Theme"
                onPress={toggleTheme}
            />
            <Divider />
            <Menu.Item
                leadingIcon={'close'}
                onPress={closeMenu}
                title="Close"
            />
        </Menu>
    );
};

export default AccountMenuList;
