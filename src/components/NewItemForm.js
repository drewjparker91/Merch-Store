import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
//import Button from "react-bootstrap/button"
import ReusableForm from "./ReusableForm";

function NewItemForm(props){

  // const formStyle = {
  //   backgroundColor: 'rgba(52, 52, 52, alpha)',
  //   position: 'absolute',
  //   marginTop: 100,
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   color: 'white'
    
  // }

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      
      {/* <div className="card"> */}
      
        <div className="container"> 
          <ReusableForm
            formSubmissionHandler = {handleNewItemFormSubmission}
            buttonText= "Add Item" />

      
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreate: PropTypes.func
}

export default NewItemForm;