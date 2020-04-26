import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => (
    <Navbar>
        <Navbar.Brand>My Company Inventory</Navbar.Brand>
        <Nav>
            <LinkContainer exact to="/products">
                <NavItem>Products</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
)


export default Navigation