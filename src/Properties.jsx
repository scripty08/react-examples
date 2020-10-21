import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    display: block;
    border: 1px solid #ccc;
    overflow-x:auto;
    th {
        padding: 10px;
        background-color: #4CAF50;
        color: white;
    };
    td {
        padding: 10px;
        width: 33.33%;
    };
    tr:nth-child(even) {background-color: #f2f2f2;}
    tr:hover {background-color: #f5f5f5;}
`;

export const Properties = (props) => {
    const {
        data,
    } = props;

    const getTableData = () => {
        return data.map((row, key) => {
           return (
               <tr key={key}>
                   <td>{row.property}</td>
                   <td>{row.description}</td>
                   <td>{row.type}</td>
                   <td>{row.default}</td>
               </tr>
           );
        });
    }

    return (
        <Table>
            <tbody>
                <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                </tr>

                {getTableData()}
            </tbody>
        </Table>
    );
};
