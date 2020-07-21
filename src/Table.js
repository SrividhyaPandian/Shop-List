import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

// ListOfShops
class ListOfShops extends Component {
  render(props) {
    const items = this.props.items;
    const btnStyle = {
      background: 'rgba(255, 0, 0, 0.5)',
      color: '#fff',
      border: 'none',
      padding: '5px 8px',
      boderRadius: '50%',
      cursor: 'pointer'
  }
    return (
      <div id="Table">
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Shop Name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {items.map((item, key) => {
              return (
                <tr key= { key }>
                  <td>{item.username}</td>
                  <td>{item.shopname}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className="deleteButton" 
                    onClick={(e) => this.props.delShop(item.id)}
                    style={btnStyle}>
                    x
                    </button>
                  </td>
                </tr>
              );
            })}
            </tbody>
        </Table>
      </div>
    );
  }
}

// PropTypes
ListOfShops.propTypes = {
  delShop: PropTypes.func.isRequired
}

export default ListOfShops;