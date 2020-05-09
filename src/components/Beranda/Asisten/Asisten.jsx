import React, {Component} from 'react';
import './Asisten.css';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Pagination,
    PaginationItem, PaginationLink,
    Row
} from "reactstrap";
import cat1 from '../SOP/img/p_cat1.png';
import cat2 from '../SOP/img/p_cat2.png';

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
                                <CardBody className="text-center">
                                    <CardImg top src={cat2} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Ruby on Rails</h3></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, magnam.</CardText>
                                    <Button color="secondary">Koordinator</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="mb-2">
                                <CardBody className="text-center">
                                    <CardImg top src={cat1} alt="Ruby on Rails" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Django</h3></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis.</CardText>
                                    <Button color="secondary">Sekretaris</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="mb-2">
                                <CardBody className="text-center">
                                    <CardImg top src={cat2} alt="Laravel" className="img-thumbnail"/>
                                    <CardTitle><h3 className="mt-1">Laravel</h3></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, et?</CardText>
                                    <Button color="secondary">Bendahara</Button>
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

export default Asisten;
