import React from 'react';

import styles from './About.module.css'

const About = () => {
	return (
		<div className={styles.about}>

			<div className={styles.firstLine}>

				<div className={styles.info}>
					<h3 className={styles.header}>
						<span className={styles.headerText}>PERSONAL INFO</span>
					</h3>
					<ul>
						<li>24 years</li>
						<li>expirience 6 month, intermediate</li>
						<li>tut.by</li>
						<li>github</li>
						<li>codewars</li>
					</ul>
				</div>

				<div className={styles.photo}>
					<div className={styles.avatar}/>
					<span className={styles.name}>Vlad Kotsur</span>
					<span className={styles.name}>Front-end Developer</span>
				</div>

				<div className={styles.stack}>
					<h3 className={styles.header}>
						<span className={styles.headerText}>TECHNOLOGIES</span>
					</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>git, yarn, npm</li>
						<li>solid, rest, mvc</li>
						<li>canban, scrum</li>
					</ul>
				</div>

			</div>

			<div className={styles.secondLine}>
				<div className={styles.soft}>My Bla-bla</div>
			</div>

		</div>
	);
}

export default About;
