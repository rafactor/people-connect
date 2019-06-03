import React from "react";
import { Table } from 'react-bootstrap';
import MyButton from '../MyButton';
import { useTranslation } from "react-i18next";

var render_tdata = (text, buttons) => (buttons) ?
    (
        buttons.map((btn, i) => {
            btn.id = i;
            btn.key = i;
            return < MyButton {...btn} />
        }

        )
    ) : (text)


function DashTable(props) {
    const { t } = useTranslation();
    if (props.data !== undefined)
        return (
            <Table className="shadow" responsive="xl" bordered hover>

                <thead className="thead-light shadow">
                    <tr>
                        {props.data.thead.map((item, i) => (
                            <th key={i} id={i} className="font-weight-normal text-center align-middle noselect text-capitalize"><i className={item.icon}></i> {(item.text) ? t(item.text) : ""}</th>

                        ))}
                    </tr>
                </thead>

                <tbody>
                    {props.data.tbody.map((row, i) => (
                        <tr key={i} id={i}>
                            {row.map((tdata, i) => (
                                <td key={i} id={i}
                                    className={`text-center align-middle noselect ${tdata.className || ""}`}
                                    colSpan={tdata.span || "1"}
                                >{render_tdata(tdata.text, tdata.buttons)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </Table>

        )
    else
        return (<></>)
}

export default DashTable;