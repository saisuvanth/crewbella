import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Portfolio.css';

const Portfolio = ({ portfolio }) => {
	return (
		<div id='portfolio' className="my-4">
			<div style={{ color: 'green', fontSize: '2rem', margin: '2rem' }}>PORTFOLIO</div>
			<Container fluid='md'>
				<Row className="justify-center">
					{portfolio?.map((port, index) =>
						<Col xs='12' md='6' lg='3' className="mx-4 my-4" key={index}>
							<Card className="mycard">
								<Card.Img style={{ height: '15rem' }} variant="top" src={port.images[0].image} />
								<Card.Body>
									<Card.Title>{port.position}</Card.Title>
									<Card.Text>
										{port.description.substring(0, 90) + ' ...'}
									</Card.Text>
									<Card.Text>
										{port.started_time.substring(0, 7) + '  to  ' + port.ended_time.substring(0, 7)}
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<a href={port.link}>{port.project_name}</a>
								</Card.Footer>
							</Card>
						</Col>
					)
					}
				</Row>
			</Container>
		</div>
	);
}


export default Portfolio