import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faCodeBranch, faToolbox} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faCss3Alt, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

import styles from './About.module.scss'
import Title from "../common/title/Title";
import StackItem from "./StackItem";

const About = () => {

	const stackInfoProps = [
		{id: 1, icon: faHtml5, info: ' HTML5'},
		{id: 2, icon: faCss3Alt, info: ' CSS3, Sass'},
		{id: 3, icon: faJsSquare, info: ' ES6+, axios'},
		{id: 4, icon: faReact, info: ' React-Redux'},
		{id: 5, icon: faToolbox, info: ' Git, Yarn, npm'}
	]

	const stackInfo = stackInfoProps.map(pr => <StackItem key={pr.id} icon={pr.icon} info={pr.info}/>)

	return (
		<div className={styles.about}>
			<div className={styles.firstLine}>
				<div className={styles.info}>
					<Title title="personal info" padding={4}/>
					<ul>
						<li>Name: Vlad Kotsur</li>
						<li>Age: 24 years</li>
						<li>City: Minsk</li>
						<li>Experience: 6 months</li>
						<li>English: intermediate (B1)</li>
					</ul>
				</div>
				<div className={styles.photo}>
					<div className={styles.avatar}/>
					<span>Front-end Developer</span>
					<ul>
						<li><a href="#">Resume <FontAwesomeIcon icon={faDownload}/></a></li>
						<li><a href="https://github.com/kotsur-vlad" rel="noopener noreferrer"
							   target="_blank"><FontAwesomeIcon
							icon={faCodeBranch}/> GitHub</a></li>
					</ul>
				</div>
				<div className={styles.stack}>
					<Title title="technologies" padding={4}/>
					<ul>
						{stackInfo}
					</ul>
				</div>
			</div>
			<div className={styles.secondLine}>
				<p>
					Within my work I’m searching for career and professional growth through
					deepening knowledge in front-end development. I have strong knowledge of the concept of
					React-Redux
					architecture. And I always improve my skills and purposefully learn new technologies. I have
					some
					experience in commercial freelance development. In my free time I solve tasks on codewars:&nbsp;
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
	);
}

export default About;
