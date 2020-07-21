import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import RegistrationForm from './Form';
import ListOfShops from './Table';
import './App.css';
import mock from './mock.json';

// App
class App extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      username: '',
      shopname: '',
      status: '',
      date: ''
    }
  };

  componentDidMount() {
    mock.forEach((el, index) => {
      el.id = index + 1;
      el.date = new Date().toISOString();
    });
   
    this.setState({
      items: mock
    });   
  }          
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];

    items.push({
      id: items.length + 1,
      username: this.state.username,
      shopname: this.state.shopname,
      status: this.state.status,
      date: new Date().toISOString()
    });

    this.setState({
      items,
      username: '',
      shopname: '',
      status: '',
      date: ''
    });

  };

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  };

  delShop =(id) => {
    this.setState({
      items: [...this.state.items.filter(el => el.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <Container className="appContainer">
        <CardColumns>
        <Card>
          <Card.Body>
            <Row>
            <Col xs={12} md={8}>
              <h4>List of Registered Shops</h4>
              {this.state.items && this.state.items.length ? <ListOfShops delShop={this.delShop} items={ this.state.items }/> : null}
            </Col>
            <Col xs={6} md={4}>
              <h4>Register your Shop</h4>
              <RegistrationForm 
              handleFormSubmit ={ this.handleFormSubmit }
              handleInputChange={ this.handleInputChange }
              newUserName={ this.state.username }
              newShopName={ this.state.shopname }
              newShopStatus={ this.state.status} />
            </Col>
            </Row>
          </Card.Body>
        </Card>
        </CardColumns>
        </Container>
      </div>
    );
  }
}

export default App;
