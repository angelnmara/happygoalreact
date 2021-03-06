import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

const Area = () => {
    return ( 
        <Container className="p-1">
            <Jumbotron>                
                    <h3 class="text-primary">Catálogo áreas</h3>
                    <br/>
                    <Row mt={5}>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            

                                    <FloatingLabel label="Nombre área" id="nombreArea" onChange={event => console.log(event.target.value) } />
                                    <br/>
                                    <FloatingLabel label="Descripción área" id="descripcionArea" onChange={event => console.log(event.target.value) } />
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
                        <th>Área</th>
                        <th>Descripción</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>                        
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
            </Jumbotron>                    
        </Container>        
     );
}
 
export default Area;