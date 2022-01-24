import React from "react";
import { Container, Card } from 'react-bootstrap';

const Questions = ({ questions }) => {
	return (
		<div id='questions' style={{ paddingBottom: '10px' }}>
			<div style={{ color: 'green', fontSize: '2rem', margin: '2rem' }}>QUESTIONS</div>
			<Container style={{ padding: '10px', marginBottom: '10px' }}>
				{questions?.map((ques, index) =>
					<Card key={index}>
						<Card.Title>{ques.title}</Card.Title>
						<Card.Text>
							{ques.answer.description}
						</Card.Text>
					</Card>
				)
				}
			</Container>
		</div>
	);
}

export default Questions