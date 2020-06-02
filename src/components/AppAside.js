import React, {Component} from 'react';
import {Col, Media, Row} from "reactstrap";

class AppAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar1: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar2: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar3: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar4: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar5: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar6: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar7: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
            gambar8: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
        }
    }

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
                                <img src={this.state.gambar1} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar2} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar3} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar4} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
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
                                <img src={this.state.gambar5} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar6} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar7} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar8} alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
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
