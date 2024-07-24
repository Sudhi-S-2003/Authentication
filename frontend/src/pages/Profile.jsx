import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jfif';

function Profile() {
  return (
    <Container className="profile-container my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="text-center">
          <Image src={placeholder} roundedCircle className="profile-image mb-3" fluid />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="profile-card shadow-lg">
            <Card.Body>
              <Card.Title className="mb-2">John Doe</Card.Title>
              <Card.Text>
                <strong>Email:</strong> john.doe@example.com <br />
                <strong>Age:</strong> 30 <br />
                <strong>Phone:</strong> +1 234 567 8901 <br />
                <strong>Location:</strong> New York, USA <br />
                <strong>Bio:</strong> A passionate developer with a love for creating intuitive user interfaces and experiences. Always eager to learn new technologies and take on new challenges.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
