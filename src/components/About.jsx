import React from "react";
import './About.css';
import { BsGlobe } from 'react-icons/bs';

const About = ({ user }) => {
	return (
		<div className='aboutpage' id="about">

			<img id='image' src={user.image_hd} alt="" />
			<div className="userinfo">
				<table style={{ color: 'white' }}>
					<tbody>
						<tr>
							<td className="tableheads">Username</td>
							<td className="tabledata">{user.username}</td>
						</tr>
						<tr>
							<td className="tableheads">D O B</td>
							<td className="tabledata">{user.dob ? user.dob : 'Not Registered'}</td>
						</tr>
						<tr>
							<td className="tableheads">User Id</td>
							<td className="tabledata">{user.user_id}</td>
						</tr>
						<tr>
							<td className="tableheads">Visits</td>
							<td className="tabledata">{user.visits}</td>
						</tr>
						<tr>
							<td className="tableheads">Followings</td>
							<td className="tabledata">{user.followings}</td>
						</tr>
						{user.bio ?
							<tr>
								<td className="tableheads">Bio</td>
								<td className="tabledata">{user.bio}</td>
							</tr>
							: null}
						{user.website ?
							<tr>
								<a href={user.website}><BsGlobe /> Website</a>
							</tr> : null}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default About;