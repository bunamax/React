import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



function Footer() {
  return (
<Container>
      <footer className="py-3 my-4">
        <Row className="justify-content-center">
          <ul className="nav border-bottom pb-3 mb-3">
            <Col className="nav-item"><Nav.Link as={Link} to="/">Home</Nav.Link></Col>
            <Col className="nav-item"><Nav.Link as={Link} to="/">Features</Nav.Link></Col>
            <Col className="nav-item"><Nav.Link as={Link} to="/">Pricing</Nav.Link></Col>
            <Col className="nav-item"><Nav.Link as={Link} to="/">FAQs</Nav.Link></Col>
            <Col className="nav-item"><Nav.Link as={Link} to="/">About</Nav.Link></Col>
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;