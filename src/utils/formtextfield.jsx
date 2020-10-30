import React from 'react';
import { Form } from 'react-bootstrap';

const FormTextField = ({ id, name, value, placeholder, label, error, onChange, type, infotext, ...restOfattrs }) => {
    const newerror = error || null;
    const classvalid = newerror !== null ? "is-invalid" : "is-valid" 
return(
    <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control value={value} onChange={onChange} type={type} name={name} placeholder={placeholder} className={classvalid} {...restOfattrs} />
    
        { newerror !== null ? <Form.Text className="text-muted">
{error}
    </Form.Text> : <Form.Text className="text-muted">
{infotext}
    </Form.Text> }
  </Form.Group>
);
}
 

export default FormTextField;