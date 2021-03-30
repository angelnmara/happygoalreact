import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

const Rol = () => {
    return ( 
        <Container className="p-1">
            <Jumbotron>                
                    <h3 class="text-primary">Catálogo rol</h3>
                    <br/>
                    <Row mt={5}>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            

                                    <FloatingLabel label="Nombre rol" id="nombreRol" onChange={event => console.log(event.target.value) } />
                                    <br/>
                                    <FloatingLabel label="Descripción rol" id="descripcionRol" onChange={event => console.log(event.target.value) } />
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
                        <th>Rol</th>
                        <th>Descripción</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>SysAdmin</td>
                        <td>Administrador de sistema</td>                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Admin</td>
                        <td>Administrador de empresa</td>                        
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Usuario</td>
                        <td>Usuairo de sistema</td>
                        </tr>
                    </tbody>
                    </Table>
            </Jumbotron>                    
        </Container>        
     );
}
 
export default Rol;