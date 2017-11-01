import React from 'react';
import {Menu, Dropdown, Button, Icon, message} from 'antd';

function handleClick(e) {
    message.info('hello')
}

const menu = (
    <Menu onClick={handleClick}>
        <Menu.Item key="1">菜单1</Menu.Item>
        <Menu.Item key="2">菜单2</Menu.Item>
        <Menu.Item key="3">菜单3</Menu.Item>
    </Menu>
);

const Dropdowns = () => (
    <Dropdown overlay={menu}>
        <Button>
            Button <Icon type="down"/>
        </Button>
    </Dropdown>
);

export default Dropdowns;