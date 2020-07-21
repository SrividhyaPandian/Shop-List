import { Button, Form } from 'react-bootstrap';
import PropTypes from "prop-types";
import React, { Component } from 'react';

// RegistrationForm
class RegistrationForm extends Component {
  render() {
    return (
      <div id="Form">
        <Form onSubmit={(e) => this.props.handleFormSubmit(e)}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" 
                placeholder="Name" 
                value={this.props.newUserName}
                onChange={(e) => this.props.handleInputChange(e, 'username')}/>
            </Form.Group>
            

            <Form.Group controlId="formBasicShopName">
                <Form.Label>Shop Name</Form.Label>
                <Form.Control type="text" 
                placeholder="Shop Name" 
                value={this.props.newShopName}
                onChange={(e) => this.props.handleInputChange(e, 'shopname')}
                />
            </Form.Group>

            <Form.Group controlId="formBasicStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" 
                placeholder="Status" 
                value={this.props.newShopStatus}
                onChange={(e) => this.props.handleInputChange(e, 'status')}
                />
            </Form.Group>

            <Form.Group controlId="formSubmit" className="submitButton">
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form.Group>

        </Form>
      </div>
    );
  }
}

// PropTypes
RegistrationForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default RegistrationForm;