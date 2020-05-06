import React, {Component} from 'react';
import './Asisten.css';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import rubyrails from "../../img/Berita/rubyrails-image.png";
import django from "../../img/Berita/django_image.png";
import laravel from "../../img/Berita/laravel-image.png";

class Asisten extends Component {
    render() {
        return (
            <section id="Asisten" className="p-3">
                <Container className="themed-container">
                    <Row>
                        <Col md="12">
                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">
                                Asisten
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={rubyrails} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Ruby on Rails : Web Development that's doesn't hurt</h3></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={django} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Django : The Web framework for perfectionists with deadlines</h3></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={laravel} alt="Laravel" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Laravel : The Php Framework for web artisans</h3></CardTitle>
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

export default Asisten;
