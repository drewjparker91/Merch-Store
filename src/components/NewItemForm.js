import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function NewItemForm(props){

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

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      
      {/* <div className="card"> */}
      <div style={formStyle}>
        <div className="container">
          <form onSubmit = {handleNewItemFormSubmission}>
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
              
            <Button variant="success" type='submit'>Add Item</Button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreate: PropTypes.func
}

export default NewItemForm;