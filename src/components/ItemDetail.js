import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function ItemDetail(props){

  const { item, onClickingDelete } = props;

  let quantity = item.quantity;
  if (quantity === 0){
    quantity="Out of Stock";
  }

  const itemDetailStyle = {
    color: "white"

  }

  function handleAddToCart(item, isSub, dif) {
    dif = parseInt(dif);
    props.onClickingAddToCart({
      name: item.name, 
      description: item.description, 
      price: item.price,
      quantity: isSub ? (item.quantity === 0 ? 0 : item.quantity = item.quantity - dif) : item.quantity = item.quantity + dif,
      id: item.id});
  }

  // function handleAddToCart(){
  //   if(item.quantity > 0) {
  //      props.onClickingAddToCart({
  //       name: item.name,
  //       description: item.description,
  //       price: item.price,
  //       quantity: item.quantity - 1,
  //       id: item.id
  //     })
  //   }
  // }
  
  return (
   
      <React.Fragment>
        <div style={itemDetailStyle}>
          <h1>Item Detail</h1>
          <h2>Item Name:{item.name}</h2>
          <h6>Description:{item.description}</h6>
          <h3>Price: ${item.price} - Quantity:{quantity}</h3>
          <Button variant="warning" onClick={props.onClickingEdit}>Edit Item</Button>
          <Button variant="danger" onClick={() => onClickingDelete(item.id)}>Delete Item</Button>
          <Button variant="primary" onClick={() => handleAddToCart(item, true, 1)}>Add To Cart</Button>
          <Button variant="primary" onClick={() => handleAddToCart(item, false, 5)}>Restock</Button>
          
          <hr/>
        </div> 
      </React.Fragment>
   
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingAddToCart: PropTypes.func,
  // onClickingRestock:PropTypes.func
};

export default ItemDetail;