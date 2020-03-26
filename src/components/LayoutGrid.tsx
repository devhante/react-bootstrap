import React from 'react';
import './LayoutGrid.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class LayoutGrid extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Container>
                    <Row><Col>container</Col></Row>
                </Container>
                <Container fluid="sm">
                    <Row><Col>container fluid sm</Col></Row>
                </Container>
                <Container fluid="md">
                    <Row><Col>container fluid md</Col></Row>
                </Container>
                <Container fluid="lg">
                    <Row><Col>container fluid lg</Col></Row>
                </Container>
                <Container fluid="xl">
                    <Row><Col>container fluid xl</Col></Row>
                </Container>
                <Container fluid>
                    <Row><Col>container fluid</Col></Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col xs={6}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col xs={5}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">1 of 3</Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">3 of 3</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">3 of 3</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col sm={8}>sm=8</Col>
                        <Col sm={4}>sm=8</Col>
                    </Row>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col xs={12} md={8}>xs=12 md=8</Col>
                        <Col xs={6} md={4}>xs=6 md=4</Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>xs=6 md=4</Col>
                        <Col xs={6} md={4}>xs=6 md=4</Col>
                        <Col xs={6} md={4}>xs=6 md=4</Col>
                    </Row>
                    <Row>
                        <Col xs={6}>xs=6</Col>
                        <Col xs={6}>xs=6</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col xs>First, but unordered</Col>
                        <Col xs={{ order: 12 }}>Second, but last</Col>
                        <Col xs={{ order: 1}}>Third, but second</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row>
                        <Col md={4}>md=4</Col>
                        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 6 }}>{`md={{ span: 6, offset: 6 }}`}</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row xs={2} md={4} lg={6}>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row xs={1} md={2}>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>

                <div className="space" />

                <Container>
                    <Row md={4}>
                        <Col>1 of 3</Col>
                        <Col xs={6}>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
        </React.Fragment>
        );
    }
}