import React, { PureComponent } from 'react';
import {Form, Container, Button} from 'react-bootstrap'

class ProductAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      category: '',
      name: '',
      image: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      Name: this.state.name,
      Price: parseInt(this.state.price, 10),
      Category: this.state.category,
      Image: this.state.image,
    };

    this.props.addProduct(product);
    this.setState({
      name: '',
      price: '',
      category: '',
      image: '',
    });
  }

  render() {
    const categoryValues = ['', 'Shirts', 'Jeans', 'Jackets', 'Sweaters', 'Accessories'];
    return (
      <Container className="justify-content-md-center" style={{backgroundColor: '#d5f4e6', padding: 20}}>
        <p>Add a new product to Inventory</p>
        <hr />
        <Form>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" value={this.state.category} onChange={e => this.setState({ category: e.target.value })}>
              {categoryValues.map(value => (
                  <option value={value} key={value}>
                    {value}
                  </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price Per Unit</Form.Label>
            <Form.Control type="text"
                          name="price"
                          value={`$${this.state.price}`}
                          onChange={e => this.setState({ price: e.target.value.replace(/\$/g, '') })}/>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control   type="text"
                            name="image"
                            value={this.state.image}
                            onChange={e => this.setState({ image: e.target.value })}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={e => this.onSubmit(e)}>
            Add Product
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ProductAdd;
