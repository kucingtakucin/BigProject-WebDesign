import React, {Component} from 'react'
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
import AppAside from "../../AppAside";

class Berita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar1: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
            gambar2: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
            gambar3: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
            gambar4: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`,
            gambar5: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`,
            gambar6: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`,
        }
    }

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
                        <Col lg="5">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar1} alt="React" className="img-fluid"/>
                                    <CardTitle><h1 className="mt-1">React : A Javascript library for building user interfaces</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar2} alt="React" className="img-fluid"/>
                                    <CardTitle><h1 className="mt-1">Reactstrap : React Bootstrap 4 Components</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar3} alt="React" className="img-fluid"/>
                                    <CardTitle><h1 className="mt-1">SASS : CSS with superpowers</h1></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?...</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" className="d-flex flex-column border-right">
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar4} alt="Ruby on Rails" className="img-fluid"/>
                                    <CardTitle><h2 className="mt-1">Ruby on Rails : Web Development that's doesn't hurt</h2></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur harum in, possimus sunt tempora.....</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar5} alt="Ruby on Rails" className="img-fluid"/>
                                    <CardTitle><h2 className="mt-1">Django : The Web framework for perfectionists with deadlines</h2></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor, illum mollitia natus porro sint!....</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                            <Card className="mb-2">
                                <CardBody>
                                    <CardImg top src={this.state.gambar6} alt="Laravel" className="img-fluid"/>
                                    <CardTitle><h2 className="mt-1">Laravel : The Php Framework for web artisans</h2></CardTitle>
                                    <CardText className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto iste nulla sed sint?....</CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                    <Button color="info">Selengkapnya ...</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3">
                            <AppAside/>
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
