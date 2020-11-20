import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  let quantity = props.quantity;
  if (parseInt(quantity) === 0){
    quantity="Out of Stock";
  }
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h6>Price: ${props.price}</h6>
        <h6>In Stock: {quantity}</h6>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;