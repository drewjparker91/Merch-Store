import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){

  const { item, onClickingDelete } = props;

  const itemDetailStyle = {
    color: "white"

  }
  
  return (
   
      <React.Fragment>
        <div style={itemDetailStyle}>
          <h1>Item Detail</h1>
          <h2>Item Name:{item.name}</h2>
          <h6>Description:{item.description}</h6>
          <h3>Price: ${item.price} - Quantity:{item.quantity}</h3>
          <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
          <hr/>
        </div> 
      </React.Fragment>
   
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;