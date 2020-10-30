import React from 'react';
import { Form } from 'react-bootstrap';

const FormSelectField = ({ id, name, value, label, error, onChange,  options }) => {
    return(
        <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
       
           
        <select
         name={name}
         value={value}
         onChange={onChange}
         className="form-control"
       >
         {options.map(option => {
           return (
             <option key={option.value} value={option.value}>
               {option.value}
             </option>
           );
         })}
        </select>
      
         
        { {error} && <Form.Text className="text-muted">
    {error}
        </Form.Text> }
      </Form.Group>
    );
}
    
export default FormSelectField;