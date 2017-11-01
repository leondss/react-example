import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';

const getData = () => {
    let result = [];
    for (let i = 0; i < 30; i++) {
        result.push({
            key: i,
            username: 'name_' + i,
            age: Math.random(),
            mobile: i++
        })
    }
};

const mapStateToProps = (data) => {
    return {
        data: getData()
    }
};

const UsersVi = connect(mapStateToProps)(Users);

export default UsersVi;