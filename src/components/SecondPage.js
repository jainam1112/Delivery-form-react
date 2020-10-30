import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Joi from 'joi-browser';
import FormBuild from "../utils/formbuild";

class SecondPage extends FormBuild {
  state = {
    data: this.props.data,
    error: {},
    };

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    componentDidMount(){
        this.setState({ step: 2 });
        }
   schema = {
    Package_details:Joi.string().required(),
    Package_weight: Joi.number().precision(2).required(),
    Package_width: Joi.number().precision(2).required(),
       Package_height: Joi.number().precision(2).required(),
    Package_length:Joi.number().precision(2).required(),

  }

  render() {
    return (
      <Container className="mt-3">
        <h2>Enter Details Of Your Delivery</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>{this.renderInput("Package_details", "Complete Workstation(Monitor, Computer, Keyboard & mouse)", "Please Enter your package Details","text", "Package Details")}</Col>
          </Row>
          <Row>
            <Col>
              {this.renderInput("Package_weight", "Package Weight in KG","Please Enter package Weight in KG","number")}
            </Col>
          </Row>
          <Row>
            <Col>
              {this.renderInput("Package_width", "Package Width in CM","Please Enter package Width in CM","number")}
            </Col>
            <Col>
              {this.renderInput("Package_height", "Package Height in CM","Please Enter package Height in CM","number")}
            </Col>
            <Col>
              {this.renderInput("Package_length", "Package Length in CM","Please Enter package Length in CM","number")}
            </Col>
          </Row>

<hr />
                <div className="d-flex justify-content-between">
                {this.renderButton("Previous",this.back)}
            {this.renderButton("Next",this.saveAndContinue)}
          </div>
        </Form>
      </Container>
    );
  }
}
export default SecondPage;
