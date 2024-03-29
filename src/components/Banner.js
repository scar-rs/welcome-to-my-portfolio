import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/4K4ga2wXdrAa1fZ5kcy2u-transformed.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Front-end Developer", "UI/UX Designer", "Programmer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                     {({ isVisible }) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline"> Welcome to my Portfolio! :3 </span>
                        <h1>{'Hello! I am Sakshi'} <span className="wrap">{text}</span></h1>
                        <p>Hey there! I'm a fresh techie with a passion for frontend technologies and a knack for UI/UX design. I thrive on crafting visually stunning interfaces and love experimenting with the latest libraries. Let's create some magic together!</p>
                        <button onClick={() => window.location.href = 'mailto:sakshij2028@gmail.com'} className="connect-button">
                            Let's Connect <ArrowRightCircle size={23} />
                        </button>
                      </div>}  
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
