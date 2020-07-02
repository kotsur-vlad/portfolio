import React from 'react';

import styles from './Projects.module.css'
import Title from "../common/title/Title";
import Project from "../common/project/Project";

const Projects = () => {
	return (
		<div className={styles.wrapper}>
			<Title title="My projects"/>

			<div className={styles.projects}>
				<div>
					<Project/>
					<Project/>
				</div>
				<div>
					<Project/>
					<Project/>
				</div>
			</div>

		</div>
	);
}

export default Projects;
