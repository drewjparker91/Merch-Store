import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Button from "react-bootstrap/button";


function ItemList(props) {
  const topStyle = {
    textAlign: 'center',
    fontFamily: 'tahoma',
    color: 'white'
  }
  const cardPadding = {
    marginBottom: "30px",
    marginLeft: "15px",
    marginTop: "15px",
    marginRight: "15px",
    backgroundColor: 'rgba(52, 52, 52, .6)',
    color: "white",
    
    
  }
  
  return (
    <React.Fragment>
      <h1 style={topStyle}>Hardwood Classic Jerseys</h1>
      <hr/>
      <Row>
        {props.itemList.map((item, index) =>
          <Col xs ={4}>       
            <div className="card" style={cardPadding}> 
              <div className="container">       
                <Item
                name={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                />
                <Button variant="danger">Add To Cart</Button>
              </div>
            </div>
        </Col>
        )}
      </Row>
   </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};


export default ItemList;