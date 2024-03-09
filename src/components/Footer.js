import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3 .svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-start">
          <Col xs={3} >
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/sakshi-jadhav--/'><img src={navIcon1} alt="Social Icon 1" /></a>
              <a href='https://github.com/scar-rs'><img src={navIcon2} alt="Social Icon 2" /></a>
              <a href='https://www.instagram.com/saksshhieee/'><img src={navIcon3} alt="Social Icon 3" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
