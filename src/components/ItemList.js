import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item, index) =>
        <Item
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        />
        )}
   </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};


export default ItemList;