import React from 'react';
import icon from '../images/icono.png'
import happy_goal from '../images/happy_goal.png'
import inicia_sesion from '../images/inicia_sesi_n_para_continuar.png'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';


const Login = () => {
    return (  
        <Container className="Login">
            <Row className="mt-5">
                <Col>
                    <Image src={icon} rounded></Image>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Image src={happy_goal}></Image>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col>
                    <Image src={inicia_sesion}></Image>
                </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                <FloatingLabel label="Email" id="email" onChange={event => console.log(event.target.value) } />
                <br/>                                    
                <FloatingLabel label="Password" id="password" onChange={event => console.log(event.target.value) } />
                <br/>                                    
                <Button variant="primary" type="submit">Entrar</Button>   
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
    );
}
 
export default Login;