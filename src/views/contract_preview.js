import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ContractPreview = (props) => {
  const sections = () => {
    return props.sections.map((section, i) => {
      return (
        <div>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
        </div>
      )
    })
  }
  
  return (
    <div>
      <Row>
        <Col>
          <h2>{props.title}:</h2>
        </Col>
      </Row>

      <Row>
        <Col>
           {sections()}
        </Col>
      </Row>
    </div>
  );
};

export default ContractPreview;
