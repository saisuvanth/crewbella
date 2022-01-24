import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Postings.css'

const Postings = ({ postings }) => {
	return (
		<div id='portfolio' className="my-4">
			<div style={{ color: 'green', fontSize: '2rem', margin: '2rem' }}>CLIENT POSTINGS</div>
			<Container fluid='md'>
				<Row className="justify-center">
					{postings?.map((port, index) =>
						<Col xs='12' md='6' lg='3' className="mx-4 my-4" key={index}>
							<Card className="mycard">
								<Card.Body>
									<Card.Title>{port.profession}</Card.Title>
									<Card.Text>
										{port.description}
									</Card.Text>
									<Card.Text>
										<span className="heads">Type</span> : {port.job_type}
									</Card.Text>
									<Card.Text>
										<span className="heads">Skills</span> : {port.skills}
									</Card.Text>
									<Card.Text>
										<span className="heads">Openings</span> : {port.openings}
									</Card.Text>
									<Card.Text>
										<span className="heads">location</span> : {port.location}
									</Card.Text>
									<Card.Text>
										<span className="heads">Experience</span> : {port.experience}<br />
										<span className="heads">Budget</span> : {port.budget}
									</Card.Text>

								</Card.Body>
								<Card.Footer>
									<span className='heads'>Time</span> : {port.time_period}

								</Card.Footer>
							</Card>
						</Col>
					)
					}
				</Row>
			</Container>
		</div>
	)
}

export default Postings