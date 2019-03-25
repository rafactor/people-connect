import React from "react";
import { Table } from 'react-bootstrap';

function DashTable(props) {
    return (

        <Table className="shadow" responsive="xl" bordered hover>

            <thead className="thead-light shadow">
                <tr>
                    {props.data.thead.map(item => (
                        <th className="font-weight-normal text-center align-middle noselect"><i className={item.icon}></i> {item.text}</th>

                    ))}
                </tr>
            </thead>

            <tbody>
                {props.data.tbody.map(row => (
                    <tr>
                        {row.map(tdata => (
                            <td
                                className="text-center align-middle noselect"
                                colSpan={tdata.span || "1"}
                            >{tdata.text}</td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </Table>

    );
}

export default DashTable;