import React, {useState} from "react";
import {Toast, Row, Col} from 'react-bootstrap'

function Success(props) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <Row variant='info'>
      <Col xs={5}>
        <Toast show={show} delay={5000}  onClose={toggleShow}>
          <Toast.Header>
            <strong className="mr-auto">
              {props.header}
            </strong>
           
            <small></small>
          </Toast.Header>
            <Toast.Body><strong>{props.text}</strong></Toast.Body>
        </Toast>
      </Col>
     
      </Row>
  )
  
}

export default Success;
