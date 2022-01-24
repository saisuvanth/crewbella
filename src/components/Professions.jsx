import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Professions.css'

const Professions = ({ professions }) => {
	const [list1, setList1] = useState([]);
	const [list2, setList2] = useState([]);

	useEffect(() => {
		professions.forEach((prof, index) => {
			if (index % 2 === 0) setList1(lis => [...lis, prof]);
			else setList2(lis => [...lis, prof]);
		});
		console.log(list1, list2);
	}, [professions]);

	return (
		<div id='professions' style={{ minHeight: '250px' }}>
			<div style={{ color: 'green', fontSize: '2rem', margin: '2rem' }}>PORTFOLIO</div>

			<Container>
				<Row style={{ minHeight: '250px' }}>
					<Col xs='6' md='6' lg='6' id="column1">
						{list1?.map((lis, index) =>
							<Container className='mycontainer lefto my-4' key={index}>
								<h4>{lis.title}</h4>
								<p>Experience  {lis.experience} yrs</p>
								{lis.quickbook_details ? <p>Salary  {lis.quickbook_details?.rate_amount + ' ' + lis.quickbook_details?.rate_currency + ' per ' + lis.quickbook_details?.rate_duration}</p> : null}
							</Container>
						)}
					</Col>
					<Col xs='6' md='6' lg='6' id="column2">
						{list2?.map((lis, index) =>
							<Container className='mycontainer righto my-4' key={index}>
								<h4>{lis.title}</h4>
								<p>Experience  {lis.experience} yrs</p>
								{lis.quickbook_details ? <p>Salary  {lis.quickbook_details?.rate_amount + ' ' + lis.quickbook_details?.rate_currency + ' per ' + lis.quickbook_details?.rate_duration}</p> : null}
							</Container>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}


export default Professions