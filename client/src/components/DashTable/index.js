import React from "react";
import { Table } from 'react-bootstrap';
import MyButton from '../MyButton';

function render_tdata(text, btn) {
    if (btn) {
        return (<MyButton type={btn.type} className={btn.className} variant={btn.variant} text={btn.text} />

        )
    }
    return (text)
}

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
                                className={`text-center align-middle noselect ${tdata.className || ""}`}
                                colSpan={tdata.span || "1"}
                            >{render_tdata(tdata.text, tdata.button)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </Table>

    );
}

export default DashTable;