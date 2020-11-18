import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h6>Price: ${props.price}</h6>
      <h6>In Stock: {props.quantity}</h6>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string
};

export default Item;