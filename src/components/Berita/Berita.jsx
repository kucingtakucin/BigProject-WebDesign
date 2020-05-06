import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container, Pagination, PaginationItem, PaginationLink,
    Row
} from "reactstrap";
import reactIcon from '../../img/Berita/React-icon.svg';
import sassIcon from '../../img/Berita/Sass_Logo_Color.svg';
import laravel from '../../img/Berita/laravel-image.png';
import rubyrails from '../../img/Berita/rubyrails-image.png';
import django from '../../img/Berita/django_image.png';
import './Berita.css';

class Berita extends Component {
    render() {
        return (
            <section id="Berita" className="p-3">
                <Container className="themed-container">
                    <Row>
                        <Col md="12">
                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Berita</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="7" className="left-post border-right">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={reactIcon} alt="React" className="img-thumbnail"/>
                                    <CardTitle><h1 className="mt-1">React : A Javascript library for building user interfaces</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam! Consectetur facere in libero quaerat quo reprehenderit sunt ullam unde?...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={sassIcon} alt="React" className="img-thumbnail"/>
                                    <CardTitle><h1 className="mt-1">SASS : CSS with superpowers</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam! Consectetur facere in libero quaerat quo reprehenderit sunt ullam unde?...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="5" className="right-post d-flex flex-column">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={rubyrails} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h2 className="mt-1">Ruby on Rails : Web Development that's doesn't hurt</h2></CardTitle>
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
                                    <CardTitle><h2 className="mt-1">Django : The Web framework for perfectionists with deadlines</h2></CardTitle>
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
                                    <CardTitle><h2 className="mt-1">Laravel : The Php Framework for web artisans</h2></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa explicabo hic iure nihil nulla tempora? Cumque eaque excepturi fugiat ipsam iure, maxime optio placeat provident rerum unde vero voluptas...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="mt-4 d-flex flex-row justify-content-center">
                            <Pagination aria-label="Labkom Page navigation">
                                <PaginationItem disabled>
                                    <PaginationLink first href="#" />
                                </PaginationItem>
                                <PaginationItem disabled>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink last href="#" />
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Berita;
