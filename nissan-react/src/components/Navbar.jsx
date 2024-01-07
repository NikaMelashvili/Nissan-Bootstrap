import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap';
import { navigationData } from '../data';

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' bg='body-tertiary'>
      <Container>
        <Navbar.Toggle aria-controls='navbarTogglerDemo01' />
        <Navbar.Collapse id='navbarTogglerDemo01'>
          <Navbar.Brand href='#'>Nissan</Navbar.Brand>
          <Nav className='me-auto mb-2 mb-lg-0'>
            {navigationData.map((data) => {
              const { id, text } = data;
              return (
                <Nav.Link href='#' key={id}>
                  {text}
                </Nav.Link>
              );
            })}
          </Nav>
          <Form className='d-flex' role='search'>
            <FormControl
              type='search'
              placeholder='Find Your Dream Car'
              aria-label='Search'
            />
            <Button variant='outline-dark' type='submit'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
