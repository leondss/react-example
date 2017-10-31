import React from 'react';

const Table = ({cols}) => (
    <table>
        {cols.map((col) => (
            <th>{col.name}</th>
        ))}
    </table>
);

export default Table