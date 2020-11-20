import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

const formStyle = {
  backgroundColor: 'rgba(52, 52, 52, alpha)',
  position: 'absolute',
  marginTop: 100,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  color: 'white'
  
}

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div style={formStyle}>
        <div className="container">
          <form onSubmit = {props.formSubmissionHandler}>
            <h3>Item Name</h3>
            <input
              type ="text"
              name = "name"
              placeholder = "..." 
              required
              />
            <h3>Description</h3>
            <textarea 
              name = "description"
              placeholder = "..."
              required
              />
            <h3>Quantity</h3>
            <input
              type = "number"
              name = "quantity"
              placeholder = "..." 
              required
              />
            <h3>Price</h3>
            <input
              type = "text"
              name = "price"
              placeholder = "..." 
              required
              />
              <br/>
            <Button variant="danger" type='submit'>{props.buttonText}</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm