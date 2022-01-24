import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", changeWidth);
		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	return (
		<>
			<nav id="navbar-nav">
				<div id="gradient-logo">
					<a href="/home">
						<img src={logo} alt="logo" id="logo" />
					</a>
				</div>
				<button className="navbar-btn-click" onClick={toggleNav}>
					<div className="navbar-btn-line" id="navbar-btn-line1"></div>
					<div className="navbar-btn-line" id="navbar-btn-line2"></div>
					<div className="navbar-btn-line" id="navbar-btn-line3"></div>
				</button>

				<ul className={toggleMenu ? "list active" : "list"}>
					<li className="items">
						<NavLink
							to="#about"
							className="link hover-underline-animation"
							activeClassName="selected"
						>
							About
						</NavLink>
					</li>
					<li className="items">
						<NavLink
							to="#events"
							className="link hover-underline-animation"
							activeClassName="selected"
						>
							Events
						</NavLink>
					</li>
					<li className="items">
						<NavLink
							to="#portfolio"
							className="link hover-underline-animation"
							activeClassName="selected"
						>
							portfolio
						</NavLink>
					</li>
					<li className="items">
						<NavLink
							to="#postings"
							className="link hover-underline-animation"
							activeClassName="selected"
						>
							Postings
						</NavLink>
					</li>
					<li className="items">
						<NavLink
							to="#professions"
							className="link hover-underline-animation"
							activeClassName="selected"
						>
							professions
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;