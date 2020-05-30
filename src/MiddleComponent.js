import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import React from 'react';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b
const MiddleComponent = (props) => {
    return <Row style={props.style}>
        <Col></Col>
            <Col>
                <Row style={props.middleRowStyle}>
                        {props.children}
                </Row>
            </Col>
        <Col></Col>
    </Row>;
}

export default MiddleComponent;