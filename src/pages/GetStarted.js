import { Carousel, Card, ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reviews() {
  return (
    <div style={{ 
      backgroundColor: "rgb(255, 99, 71)", 
      minHeight: "100vh",
      padding: "clamp(1rem, 3vw, 2rem) 0"
    }}>
      <Container className="px-2 px-sm-3">
        <Carousel variant="dark" className="position-relative pb-4">
          
          <Carousel.Item>
            <div className="d-flex justify-content-center px-4">
              <Card style={{ maxWidth: "22rem", width: "100%" }}>
                <Card.Body>
                  <Card.Title className="text-center">User 1</Card.Title>
                  <Card.Text>
                    This is a very well-designed and highly useful website.
                    I would definitely recommend it,
                    particularly for those who have experienced being grounded before.🥲
                  </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                  <ListGroup.Item className="text-center"><b>Sending money via a local online WebApp</b></ListGroup.Item>
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                  <ListGroup.Item className="text-center"><b>Nothing till now</b></ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center px-4">
              <Card style={{ maxWidth: "22rem", width: "100%" }}>
                <Card.Body>
                  <Card.Title className="text-center">User 2</Card.Title>
                  <Card.Text>
                    Decent website. Useful in some cases,
                    but nothing extraordinary.
                    It works fine, though I've seen better alternatives out there.
                  </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                  <ListGroup.Item className="text-center"><b>Book a table at a well-known restaurant</b></ListGroup.Item>
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                  <ListGroup.Item className="text-center"><b>Enhance user experience</b></ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center px-4">
              <Card style={{ maxWidth: "22rem", width: "100%" }}>
                <Card.Body>
                  <Card.Title className="text-center">User 3</Card.Title>
                  <Card.Text>
                    Amazing website! Super user-friendly, fast, and genuinely helpful.
                    Highly recommend it to everyone , easily one of the best I've come across!
                  </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                  <ListGroup.Item className="text-center"><b>Plan a vacation outside your home country</b></ListGroup.Item>
                  <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                  <ListGroup.Item className="text-center"><b>Nothing till now</b></ListGroup.Item>
         </ListGroup>
              </Card>
            </div>
          </Carousel.Item>

        </Carousel>
      </Container>
    </div>
  );
}

export default Reviews;