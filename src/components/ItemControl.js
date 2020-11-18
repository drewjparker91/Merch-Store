import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button';

class ItemControl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterItemList:[]
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "View Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList}/>;
      <Row>
        <Col xs= {3}>
        <ItemList />
        </Col>
      </Row>

      buttonText = "Add Items"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default ItemControl;


