import React from 'react';
import {Table} from 'antd';

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile'
    },
];

const Users = ({data}) => (
    <Table dataSource={data} columns={columns}/>
);

export default Users;