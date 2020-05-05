import React, {Component} from 'react';
import './SOP.css';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import rubyrails from "../../img/Berita/rubyrails-image.png";
import django from "../../img/Berita/django_image.png";
import laravel from "../../img/Berita/laravel-image.png";

class SOP extends Component {
    render() {
        return (
            <section id="SOP" className="p-3 border-bottom">
                <Container className="themed-container">
                    <Row>
                        <h1 className="border-bottom pl-4 pr-4 mb-4">Standar Operasional Prosedur</h1>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={rubyrails} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h5 className="mt-1">Ruby on Rails : Web Development that's doesn't hurt</h5></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={django} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h5 className="mt-1">Django : The Web framework for perfectionists with deadlines</h5></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={laravel} alt="Laravel" className="img-thumbnail"/>
                                    <CardTitle><h1 className="mt-1">Laravel : The Php Framework for web artisans</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SOP;
