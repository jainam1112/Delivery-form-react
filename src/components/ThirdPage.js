import React from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import Joi from 'joi-browser';
import FormBuild from '../utils/formbuild';
import countryList from 'react-select-country-list';

class ThirdPage extends FormBuild{

    state = {
        data:this.props.data,
        error: {},
        countryList:countryList().getData()
    } 
    componentDidMount(){
        this.setState({ step: 3 });
    }


    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    schema = {
        address_Line_1:Joi.string().required(),
         address_Line_2:Joi.string(),
      postcode: Joi.number().integer().required(),
  city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string()
}
    

    render(){
        
        return(
            <Container className="mt-3">
                <h2>Enter Delivery Location</h2>
                <Form onSubmit={this.handleSubmit}>
                <Row><Col>{this.renderInput("address_Line_1", "Address Line 1", "Please Enter your Address")}</Col></Row>
                    <Row><Col>{this.renderInput("address_Line_2", "Address Line 2", "Please Enter your Address")}</Col></Row>
                    <Row><Col>{this.renderInput("postcode", "Postcode",  "Please Enter your Postal Code", "number" ,"Postcode" )}</Col><Col>{this.renderInput("city", "city")}</Col></Row>
                   <Row> <Col>{this.renderInput("state", "State", "Please Enter your State")}</Col> 
                    <Col>{this.renderSelect("country", "country",this.state.countryList)}</Col></Row> 
                   <hr />
                    <div className="d-flex justify-content-between">{this.renderButton("Previous",this.back)}
            {this.renderButton("Next",this.saveAndContinue)}
          </div>                

</Form>
</Container>
        );

    }
}
export default ThirdPage;