import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../components.module.css';
import Navbar from './Navbar';
import About from './About';
import Events from "./Events";
import Portfolio from "./Portfolio";
import Professions from "./Professions";
import Postings from "./Postings";
import Questions from "./Questions";

const Home = ({ user }) => {
	const navigate = useNavigate();
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem('user') && user) {
			setLogged(window.localStorage.getItem('user'));
		} else {
			navigate('/login', { replace: true });
		}
	}, [navigate, user]);

	return (<div style={{ height: '100vh', width: '100%' }}>
		{(logged && user) ?
			<>
				<div className={styles.cover} style={{ backgroundImage: `url(${user.basic.cover})` }}>
				</div>
				<div className={styles.mainheading}>
					<div className={styles.company}>
						CREW BELLA
					</div>
					<hr className={styles.seperator} />
					<span className={styles.name}>{user.basic.fullname}</span>
				</div>
				<div className={styles.container}>
					<Navbar />
					<About user={user.basic} />
					<Events events={user.events} />
					<Portfolio portfolio={user.portfolio} />
					<Professions professions={user.professions} />
					<Postings postings={user.client_postings} />
					<Questions questions={user.questions} />
				</div>
			</>
			: null}
	</div>
	)
}

export default Home;