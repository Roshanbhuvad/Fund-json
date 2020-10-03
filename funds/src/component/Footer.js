import React, {Fragment, Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Components {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" varient="dark">
                    <Navbar.Brand>SIP Investment</Navbar.Brand>
                </Navbar>
            </Fragment>
        );
    }
}