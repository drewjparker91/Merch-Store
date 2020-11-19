import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterItemList:[],
      selectedItem: null
    };
  }
  
  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null){
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} />
      buttonText = "View Item List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "View Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
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


