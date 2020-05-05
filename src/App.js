import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import logo from './img/logo.svg';
import {Route, Switch} from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardColumns,
    CardDeck,
    CardFooter,
    CardGroup,
    CardHeader,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardSubtitle, CardText, CardTitle,
    Col,
    Collapse,
    Container,
    Jumbotron,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink, Pagination, PaginationItem, PaginationLink,
    Row
} from 'reactstrap';
import './sass/App.css';
import Berita from "./components/Berita/Berita";
import SOP from "./components/SOP/SOP";

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
        <Navbar color="info" dark={true} fixed="top" expand="md" className="App-nav">
            <Container fluid={true} className="text-center">
                <NavbarBrand href="/" className="font-weight-bold">
                    <img src={logo} alt="Labkom" width="30" height="30" className="d-inline-block align-top mr-1"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className="active">Beranda</NavLink>
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
                    <h1 className="display-3 font-weight-bold text-light mt-4 mb-0">Laboratorium <span className="labkom">Komputasi</span> FMIPA</h1>
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
                <Berita/>
                <SOP/>
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

export default class App extends Component {
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

Container.propTypes = {
    fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    // applies .container-fluid class if bool or .container-{breakpoint} if string
}

Row.propTypes = {
    noGutters: PropTypes.bool,
    // see https://reactstrap.github.io/components/form Form Grid with Form Row
    form: PropTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        // example size values:
        // 12 || "12" => col-12 or col-`width`-12
        // auto => col-auto or col-`width`-auto
        // true => col or col-`width`
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

Col.propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    // override the predefined width (the ones above) with your own custom widths.
    // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
    widths: PropTypes.array,
}

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
};

Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
};

CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardColumns.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardDeck.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardFooter.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardGroup.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardHeader.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
    top: PropTypes.bool,
    bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardLink.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
            PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        ]))
    ]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
}

Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
}

Pagination.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
};

PaginationItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PaginationLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
};
