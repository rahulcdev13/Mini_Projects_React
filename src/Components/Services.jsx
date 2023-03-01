import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { servicesdata } from './ServicesData';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './website.css'

const Services = () => {
    const [serviceData, setServiceData] = useState(servicesdata);
    const savedata =()=>{
        setServiceData(serviceData)
    }
    return (
        <>
            <h1 style={{ marginTop: '10px' }} >Our Services</h1>
            <hr style={{ marginRight: '800px', marginLeft: '800px', fontWeight: 'bold' }}></hr>
            <Container>
                <Row>
                    {
                        serviceData.map((showdata) => {
                            return (
                                <>
                                    <Col style={{ marginTop: '10px' }} key={showdata.id} xs={4} >
                                        <Card>
                                            <Card.Img variant="top" src={showdata.image} />
                                            <Card.Body className="title">
                                                <Card.Title >{showdata.title}</Card.Title>
                                                <Card.Text >{showdata.description}</Card.Text>
                                                <Button onClick={savedata} >Click me</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>




        </>
    )
}

export default Services
