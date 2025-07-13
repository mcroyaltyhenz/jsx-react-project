import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';
import './styles.css';

// Add your name here
const firstName = "Alex";

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="product-card shadow">
            <Card.Body>
              <ProductImage />
              <Name />
              <Price />
              <Description />
              <div className="d-grid mt-3">
                <button className="btn btn-primary btn-lg">
                  Add to Cart
                </button>
              </div>
            </Card.Body>
          </Card>

          <div className="greeting-section text-center mt-4">
            {firstName ? (
              <>
                <h2>Hello, {firstName}!</h2>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" 
                  alt="Welcome" 
                  className="welcome-image"
                />
              </>
            ) : (
              <h2>Hello, there!</h2>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
