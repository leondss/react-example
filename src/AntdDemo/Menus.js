import React from 'react';
import {Menu, Icon, message} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends React.Component {
    render() {
        return (
            <Menu mode="inline">
                <Menu.Item key="mail">
                    <Icon type="mail"/> Nav One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore"/> Nav Two
                </Menu.Item>
            </Menu>
        );
    }
}

export default Menus;