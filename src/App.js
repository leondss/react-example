import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Buttons from './AntdDemo/Buttons';

const cols = [
    {name: '名称'},
    {name: '年龄'}
];

const App = () => (
    <div>
        <h2>Buttons</h2>
        <hr/>
        <Buttons/>
    </div>
);

export default App;
