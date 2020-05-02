import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import logo from './img/logo.svg';
import {Route, Switch} from "react-router-dom";
import {
    Collapse,
    Container,
    Jumbotron,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import './sass/App.css';

class MyApp extends Component {
    render() {
        return (
            <React.Fragment>
                <AppNavbar/>
                <AppHeader/>
                <AppMain/>
                <AppFooter/>
            </React.Fragment>
        );
    }
}

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" dark={true} fixed={true} expand="md" className="App-nav">
            <Container fluid={true} className="text-center">
                <NavbarBrand href="/" className="font-weight-bold">
                    <img src={logo} alt="Labkom" width="30" height="30" className="d-inline-block align-top mr-1"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Beranda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">Profil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#sop">Fasilitas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#asisten">Layanan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>React Js version : {React.version}</NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    )

}

class AppHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <Jumbotron className="d-flex flex-column align-items-center justify-content-center m-0">
                    <h1 className="display-3 font-weight-bold text-light m-0">Laboratorium <span className="labkom">Komputasi</span> FMIPA</h1>
                    <h1 className="display-4 text-light m-0">Universitas Sebelas Maret</h1>
                </Jumbotron>
            </header>
        )
    }
}

class AppMain extends Component {
    render() {
        return (
            <main className="App-main">

            </main>
        )
    }
}

class AppFooter extends Component {
    render() {
        return (
            <footer className="App-footer">

            </footer>
        )
    }
}

class AppRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" component={MyApp} exact={true}/>
                </Switch>
            </React.Fragment>
        )
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

export default AppRouter;
