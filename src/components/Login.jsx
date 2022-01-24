import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import styles from '../components.module.css';
import axios from "axios";

const Login = ({ set }) => {
	const user = useRef();
	const nav = useNavigate();
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.get(`https://py.crewbella.com/user/api/profile/${user.current.value}`).then(res => {
			console.log(res);
			if (res.data.result === false) {
				return setMessage(`No User with username ${user.current.value} found`);
			} else {
				set(res.data);
				window.localStorage.setItem('user', user.current.value);
				nav('/', { replace: true });
			}
		}).catch(err => {
			return setMessage(`No User with username ${user.current.value} found`);
		})
	}

	return (
		<div className={styles.formcont}>
			<h2 className={styles.heading}> Welcome to CrewBella</h2>
			<div className={styles.formcont} style={{ minWidth: '60%', marginTop: '10%' }} >
				<Container>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicUsername" className="mb-3">
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								autoComplete="username"
								placeholder="Enter your Username"
								ref={user}
							/>
							<Form.Text className="text-muted">
								{message ? message : null}
							</Form.Text>
						</Form.Group>
						<div className={styles.form}>
							<Button type="submit">
								Submit
							</Button>
						</div>
					</Form>
				</Container>
			</div>
		</div >
	)
}

export default Login;