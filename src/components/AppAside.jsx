import React, {Component} from 'react';
import {Col, Media, Row} from "reactstrap";
import cat1 from "./Beranda/SOP/img/p_cat1.png";
import cat2 from "./Beranda/SOP/img/p_cat2.png";

class AppAside extends Component {
    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                        <h3 className="border-bottom font-weight-bold pl-2 pr-2 mb-2">Most Popular</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat1} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat2} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat1} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat2} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <h3 className="border-bottom font-weight-bold pl-2 pr-2 mb-2">Hot News</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat1} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat2} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat1} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={cat2} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h5 className="m-auto">Lorem ipsum dolor sit amet.</h5>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default AppAside;
