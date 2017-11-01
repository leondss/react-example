import React, {Component} from 'react';
import {Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import {Buttons, Icons, Grids, Layouts, Breadcrumbs, Dropdowns, Menus, StepsEx} from './AntdDemo';
import Users from './Crud/Users';

const cols = [
    {name: '名称'},
    {name: '年龄'}
];

const App = () => (
    <div>
        <Users/>
    </div>
);

export default App;
