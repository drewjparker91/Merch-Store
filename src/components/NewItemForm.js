import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <form onSubmit = {handleNewItemFormSubmission}>
        <input
          type ="text"
          name = "name"
          placeholder = "Item Name" />
        <textarea 
          name = "description"
          placeholder = "Description" />
        <input
          type = "number"
          name = "quantity"
          placeholder = "Quantity" />
        <input
          type = "number"
          name = "price"
          placeholder = "Price" />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreate: PropTypes.func
}

export default NewItemForm;