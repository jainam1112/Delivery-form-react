import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import FormTextField from './formtextfield';
import FormSelectField from './formselectfield';
import Joi from 'joi-browser';

class FormBuild extends Component{
    state = {
        data:{},
        error:{}
        
    } 
    validateproperty = ( name, value ) => {
      const obj = { [name]: value };
      console.log(obj);
      const schema = { [name]: this.schema[name] };
      console.log(schema);
        const { error } = Joi.validate( obj,schema );
        return  error ? error.details[0].message : null
    }
    handleChange = ({currentTarget: input }) => {
        const data = {...this.state.data}
      const error = { ...this.state.error }
      console.log(input.name, input.value);
        const errorMessage = this.validateproperty(input.name, input.value)
        if (errorMessage != null){
            error[input.name] = errorMessage
        }
        else {
            delete error[input.name]
        }
        data[input.name] = input.value
        this.setState({ data , error });
    }
    handleValidate = (data) => {
        const result = Joi.validate(data, this.schema, {abortEarly:false} );
    
        const error = {};
      
        if (!result.error) return null
            for ( let e of result.error.details){
                error[e.path[0]] = e.message;
            }
    
        return  error  ;
    }

    saveAndContinue = (e) => {
      e.preventDefault();
      const error = this.handleValidate(this.state.data);
        this.setState({ error: error || {} });
        if (error === null) { this.props.nextStep(this.state.data); }
    };
    renderInput = (name, placeholder, infotext,  type = "text", label = placeholder) => {
        const { data, error } = this.state;
      return(<FormTextField 
        id={name}
        label={label}
        placeholder={placeholder}
        name={name}
        type={type}
        value={data[name]}
        error={error[name]}
        onChange={this.handleChange}
        infotext={infotext}
        
        />
        ) ;
  }
  renderSelect = ( name, placeholder, options, label = name) => {
    const { data, error } = this.state;
  return(<FormSelectField 
    id={name}
    label={label}
    placeholder={placeholder}
    name={name}
    value={data[name]}
    error={error[name]}
    onChange={this.handleChange}
    options={options.map(c => ({
      value: c.label,
      text: c.value
    }))}
    />
    ) ;
}
      renderButton = (label,handleOnclick) =>{
      return( <Button  variant="primary" type="submit" onClick={handleOnclick}>
       {label} 
      </Button>)
      }
}
export default FormBuild;
