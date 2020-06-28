import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faDownload, faCodeBranch, faTools} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faCss3Alt, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

import styles from './About.module.css'
import Title from "../common/title/Title";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.firstLine}>

				<div className={styles.info}>
					<Title title="personal info"/>
					<ul>
						<li>Name: Vlad Kotsur</li>
						<li>Age: 24 years</li>
						<li>City: Minsk</li>
						<li>Experience: 5 months</li>
						<li>English: intermediate (B1)</li>
					</ul>
				</div>

				<div className={styles.photo}>
					<div className={styles.avatar}/>
					<span>Front-end Developer</span>
					<ul>
						<li><a href="">Resume <FontAwesomeIcon icon={faDownload}/></a></li>
						<li><a href="https://github.com/kotsur-vlad" rel="noopener noreferrer"
							   target="_blank"><FontAwesomeIcon
							icon={faCodeBranch}/> GitHub</a></li>
					</ul>
				</div>

				<div className={styles.stack}>
					<Title title="technologies"/>
					<ul>
						<li><FontAwesomeIcon icon={faHtml5}/> HTML5</li>
						<li><FontAwesomeIcon icon={faCss3Alt}/> CSS3, Sass</li>
						<li><FontAwesomeIcon icon={faJsSquare}/> ES6+, axios,</li>
						<li><FontAwesomeIcon icon={faReact}/> React-Redux, react-router-dom, ducks, css-modules,
							proptypes
						</li>
						<li><FontAwesomeIcon icon={faTools}/> Git, Yarn, npm</li>
					</ul>
				</div>
			</div>

			<div className={styles.secondLine}>
				<div className={styles.soft}>
					<p>
						Within my work I’m searching for career and professional growth through
						deepening knowledge in front-end development. I have strong knowledge of the concept of
						React-Redux
						architecture. And I always improve my skills and purposefully learn new technologies. I have
						some
						experience in commercial freelance development. In my free time I solve tasks on codewars:
						<a href="https://www.codewars.com/users/kotsur.vlad/" rel="noopener noreferrer" target="_blank">
							<img src="https://www.codewars.com/users/kotsur.vlad/badges/micro" alt=""/>
						</a>
					</p>
					<p>
						I able to work with large amount of information. Also, I can to work hard with tasks, herewith I
						be
						persistent. I like good teams with smart people, new challenges, and opportunities.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
