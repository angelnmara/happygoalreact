import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

const Funcionalidades = () => {
    return ( 
        <Container className="p-1">
            <Jumbotron>                
                    <h3 class="text-primary">Catálogo funcionalidades</h3>
                    <br/>
                    <Row mt={5}>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            

                                    <FloatingLabel label="Nombre funcionalidad" id="nombreRol" onChange={event => console.log(event.target.value) } />
                                    <br/>
                                    <FloatingLabel label="Descripción funcionalidad" id="descripcionRol" onChange={event => console.log(event.target.value) } />
                                    <br/>
                                    <Button variant="primary" type="submit">Guardar</Button>                                                  
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <br/>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Funcionalidad</th>
                        <th>Descripción</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Pantalla calificaciones</td>
                        <td>calificaciones</td>                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Pantalla administracion de roles</td>
                        <td>roles</td>                        
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Pantalla administracion de usuarios</td>
                        <td>usuarios</td>
                        </tr>
                    </tbody>
                    </Table>
            </Jumbotron>                    
        </Container>        
     );
}
 
export default Funcionalidades;