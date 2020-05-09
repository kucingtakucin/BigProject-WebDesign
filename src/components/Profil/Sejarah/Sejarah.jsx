import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import './Sejarah.css';
import AppAside from "../../AppAside";
import {NavLink as Link} from "react-router-dom";

class Sejarah extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="Sejarah" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Beranda</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Profil</BreadcrumbItem>
                            <BreadcrumbItem active>Sejarah</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Sejarah</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="text-justify">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi culpa, dolorum eos eum ex, impedit in inventore ipsum labore, maiores nulla temporibus veritatis. Aliquam atque consequuntur dicta dolor incidunt officia praesentium reiciendis reprehenderit? Dolor et iste nemo odio ut vel voluptates. Ad alias, architecto asperiores delectus doloremque ea est eum facilis fugiat necessitatibus nihil nostrum odio ratione? Aliquid aperiam atque autem, cum debitis ea est eveniet ex, explicabo illo impedit ipsum nemo, nesciunt nostrum perferendis quis quo repudiandae rerum tempore voluptatum? Ad, cupiditate, dignissimos eligendi, eos excepturi fuga fugiat harum illo ipsam laudantium molestiae nam nostrum pariatur porro repellendus sed veniam veritatis! Dolorem eum fugiat iusto magni maxime quam vel. Consequuntur enim est omnis quasi quia saepe similique sint?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium aliquam at aut commodi culpa cumque cupiditate dolore doloribus enim error facilis fuga hic illum, ipsa ipsam iusto libero, nam neque nostrum obcaecati perspiciatis provident, quae quas quis quos sapiente sed ullam veniam. Exercitationem molestiae perferendis quae, quo sunt velit! Consectetur fuga id inventore maiores minus neque qui quibusdam reprehenderit? Enim eos error ipsum, mollitia nemo nobis tempora voluptatem? Ab accusantium adipisci assumenda beatae doloremque, doloribus enim eum fugit maiores minima natus quaerat tempora veniam? Dolorum excepturi facere iure minima neque quis reiciendis sequi. Accusamus aspernatur assumenda blanditiis commodi consectetur dolorum eveniet ipsa, minus, natus nostrum nulla quam rerum vero! Adipisci enim ex fuga perferendis quasi reiciendis sed ut.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, cum debitis dolores dolorum eligendi error excepturi exercitationem facere id illum iusto labore magnam necessitatibus numquam omnis praesentium quae quasi sint. Ab ad alias amet commodi cumque cupiditate delectus deserunt dolor dolore dolores ea eaque earum enim eos explicabo facilis fugiat itaque molestiae nesciunt nihil nisi provident quia quidem quis, quod reiciendis repellendus reprehenderit sunt totam unde ut veniam veritatis, voluptate. Accusantium ad dicta ea esse exercitationem laboriosam minus molestiae, neque non numquam obcaecati provident quibusdam quisquam reprehenderit rerum sed ullam vero vitae! Accusantium ad architecto dolore ea esse eum, facere facilis hic iusto modi obcaecati odio perspiciatis quae quia quod reiciendis repellat repellendus rerum voluptate, voluptatum. Accusamus dolorum expedita illo?</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="3" className="border-left">
                                <AppAside/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default Sejarah;
