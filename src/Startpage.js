import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import React from 'react';
import useWindowDimension from './hooks/useWindowDimension';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b
const Startpage = () => {
  const {height, width} = useWindowDimension();

  return <div style={{ height: height, backgroundColor: '#DCE0D9'}}>
          <Container style={{
                    textAlign: 'center', 
                    fontWeight : 'bold',
                    fontFamily: 'sans-serif',
                    color: '#5C0029',
                  
                    
                    fontSize: 60, 
                    paddingTop: 100
                  }} fluid>
            <Row style={{height:100}}>
              <Col></Col>
              <Col>Versions-API {height}</Col>
              <Col></Col></Row>
            <Row>
              <Col></Col>
              <Col>
              <InputGroup size="lg">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />              
              </InputGroup>
              </Col>
              <Col></Col>
            </Row>
            <Row></Row>           
          </Container>
      </div>;
}

export default Startpage;