import { Container } from "react-bootstrap";

import React from 'react';
import { Button } from "react-bootstrap";

const Finalpage = (props) => {

    const reset = (e) => { 
        e.preventDefault();
        props.reset();
    }
    const message = props.data === 5 ? "Your Data has been successfully Saved, Thank You" : "Theres an error in your filling, pls retry"
    return (<Container >
        <h1 style={{color: "blue"}} className="mt-5">{ message } </h1>
        
      <div className="d-flex align-items-center"><Button  variant="primary" type="submit" onClick={reset}> Reset
      </Button></div> 
    </Container> );
}
 
export default Finalpage;