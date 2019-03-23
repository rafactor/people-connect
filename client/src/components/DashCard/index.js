import React from "react";
import { Jumbotron, Card, Col, Button, Table } from 'react-bootstrap';

function DashCard(props) {
    return (
        <Col xl={12} className="mb-3">
            <Card className="border-dark">
                <Card.Header className="bg-dark justify-content-center">
                    <Button className="float-left" variant="info" >
                        <i className={props.icon}></i> {props.title}
                    </Button>
                    <Button className="float-right" variant="warning">
                        <i className="fas fa-plus"></i>
                    </Button>
                </Card.Header>
                <Card.Body>

                    <Card.Title>List of Services Nearby</Card.Title>
                    <Card.Text>Select one of the following services</Card.Text>
                    <Table className="m-0" responsive="xl" bordered hover>
                        <thead className="thead-light">
                            <tr>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-hashtag"></i></th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-language"></i> Name</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-user"></i> Contact</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-envelope"></i> Email</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-phone"></i> Phone</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-map-marked-alt"></i> Country</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-map-marker-alt"></i> City</th>
                                <th className="font-weight-normal text-center align-middle noselect"><i className="fas fa-info-circle"></i> More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center align-middle noselect">1</td>
                                <td className="text-center align-middle noselect">Mark</td>
                                <td className="text-center align-middle noselect">Mark</td>
                                <td className="text-center align-middle noselect">Otto</td>
                                <td className="text-center align-middle noselect">Otto</td>
                                <td className="text-center align-middle noselect">Otto</td>
                                <td className="text-center align-middle noselect">Otto</td>
                                <td className="text-center align-middle noselect">@mdo</td>
                            </tr>
                            <tr>
                                <td className="text-center align-middle noselect">2</td>
                                <td className="text-center align-middle noselect">Jacob</td>
                                <td className="text-center align-middle noselect">Jacob</td>
                                <td className="text-center align-middle noselect">Thornton</td>
                                <td className="text-center align-middle noselect">Thornton</td>
                                <td className="text-center align-middle noselect">Thornton</td>
                                <td className="text-center align-middle noselect">@fat</td>
                                <td className="text-center align-middle noselect">@fat</td>
                            </tr>
                            <tr>
                                <td className="text-center align-middle noselect">3</td>
                                <td className="text-center align-middle noselect" colSpan="2">Larry the Bird</td>
                                <td className="text-center align-middle noselect" colSpan="2">Larry the Bird</td>
                                <td className="text-center align-middle noselect">@twitter</td>
                                <td className="text-center align-middle noselect">@twitter</td>
                                <td className="text-center align-middle noselect">@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    2 days ago
                    </Card.Footer>
            </Card>
        </Col>
    );
}

export default DashCard;