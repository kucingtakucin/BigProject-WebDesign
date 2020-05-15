import React, {Component} from 'react';
import {Col, Media, Row} from "reactstrap";

class AppAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar1: null, gambar2: null, gambar3: null, gambar4: null,
            gambar5: null, gambar6: null, gambar7: null, gambar8: null
        }
    }

    componentDidMount() {
        fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 5 + 1)}&limit=100`)
            .then(response => response.json())
            .then(results => {
                this.setState({
                    gambar1: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar2: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar3: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar4: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar5: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar6: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar7: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    gambar8: results[Math.floor(Math.random() * 100 + 1)].download_url,
                })
            })
            .catch (errors => console.log('Error', errors));
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
                                <img src={this.state.gambar1} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar2} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar3} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar4} width="80px" alt="Kucing"/>
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
                                <img src={this.state.gambar5} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar6} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar7} width="80px" alt="Kucing"/>
                            </Media>
                            <Media body className="m-auto">
                                <Media heading className="m-auto">
                                    <h6 className="pl-1 m-auto">Lorem ipsum dolor sit amet.</h6>
                                </Media>
                            </Media>
                        </Media>
                        <Media className="mb-2">
                            <Media left href="#">
                                <img src={this.state.gambar8} width="80px" alt="Kucing"/>
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
