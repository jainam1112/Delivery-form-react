import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

class Forthpage extends Component {
    state = {};
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    save = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      
    const { firstpage, secondpage, thirdpage } = this.props.data;
    return (
        <>
            <Container>
              <Row><Col>
        <h2 className="mt-3">Review your Details and Submit</h2>
        <div className="mb-3">
          <h4>Current Address</h4>
          <p>
            {firstpage.address_Line_1}
            <br />
            {firstpage.address_Line_2}
            <br />
            {firstpage.city} {firstpage.postcode}, {firstpage.state},
            {firstpage.country}
          </p>
                    </div>
                    <hr />
        <div className="mb-3">
          <h4>Package Details</h4>
          <p>
            Package: {secondpage.Package_details}
            <br />
            Weight: {secondpage.Package_weight} Kg
            <br />
            Dimension: {secondpage.Package_length} cms x{" "}
            {secondpage.Package_width} cms x {secondpage.Package_height} cms
          </p>
                    </div>
                    <hr />
        <div className="mb-3">
          <h4>Delivery Address</h4>
          <p>
            {thirdpage.address_Line_1}
            <br />
            {thirdpage.address_Line_2}
            <br />
            {thirdpage.city} {thirdpage.postcode}, {thirdpage.state},
            {firstpage.country}
                        </p>
                        
                    </div>
                </Col></Row>
                <hr />
                <div className="d-flex justify-content-between"> <Button  variant="primary" type="submit" onClick={this.back}>
                    Previous 
      </Button> <Button  variant="primary" type="info" onClick={this.save}>
       Submit
      </Button></div>
                </Container>
      </>
    );
  }
}

export default Forthpage;
