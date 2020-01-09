import React, { Component }       from 'react';
import ContractPreview            from './views/contract_preview';
import { Container, Row, Col }    from 'reactstrap';
import NavBar from './views/components/layout/nav.js';
// Import Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Example Contract Title",
      signee: "Ryan L",
      sections: [
        {
          position: 0,
          title: "Section 1",
          text: "This is a contract this is a contract this is a contract.",
        }
      ]
    }
  }
  
  render() {

    return (
      <Container fluid="true">
        <NavBar /> 
        <Row>
          <Col md="3" className="form-panel">
            Form Here
          </Col>

          <Col md="9">
            <ContractPreview 
              sections={this.state.sections}
              signee={this.state.signee}
              title={this.state.title}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
