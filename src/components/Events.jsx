import React from 'react';
import { Carousel } from 'react-bootstrap';

const Events = ({ events }) => {
	return (
		<div className='container-fluid' style={{ marginTop: '35px' }} id='events'>
			<div style={{ color: 'green', fontSize: '2rem', margin: '2rem' }}>EVENTS</div>
			<div className='container'>
				<Carousel>
					{events?.map((event, index) =>
						<Carousel.Item key={index}>
							<img
								className="d-block w-100"
								src={event.thumbnail}
								alt="First slide"
								style={{ borderRadius: '10px' }}
							/>
							<Carousel.Caption>
								<h3>{event.theme}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					)
					}
				</Carousel>
			</div>
		</div>
	);
}


export default Events;