import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import {Buttons, Icons, Grids, Layouts, Breadcrumbs, Dropdowns, Menus, StepsEx} from './AntdDemo';

const cols = [
    {name: '名称'},
    {name: '年龄'}
];

const App = () => (
    <div>
        <Menus/>
        <Dropdowns/>
        <StepsEx/>
    </div>
);

export default App;
