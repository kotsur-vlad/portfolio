import React from 'react';

import styles from './About.module.css'

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.info}>About me, link on resume, git, codewars</div>
			<div className={styles.photo}>Image, name</div>
			<div className={styles.stack}>Technology</div>
			<div className={styles.soft}>My Bla-bla</div>
		</div>
	);
}

export default About;
