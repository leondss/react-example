import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import {Buttons, Icons, Grids,Layouts} from './AntdDemo';

const cols = [
    {name: '名称'},
    {name: '年龄'}
];

const App = () => (
    <div>
        <Layouts/>
    </div>
);

export default App;
