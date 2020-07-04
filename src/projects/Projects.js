import React from 'react';

import styles from './Projects.module.scss'
import Title from "../common/title/Title";
import Project from "./Project";
import counterIcon from "./../assets/images/counter/counterIcon.png";
import counterPreview from "./../assets/images/counter/counterPreview.jpg";
import gameIcon from "./../assets/images/game/gameIcon.png";
import gamePreview from "./../assets/images/game/gamePreview.jpg";

const Projects = () => {

	const projectsProps = [
		{
			id: 1,
			title: 'Counter',
			icon: counterIcon,
			preview: counterPreview,
			demo: 'https://kotsur-vlad.github.io/counter/',
			source: 'https://github.com/kotsur-vlad/counter',
			stack: 'React, local state, lifecycle methods, css modules, local storage, cssComb',
			description: 'This application is a counter. it allows to set end and start values and then to increase the counter\'s value by 1'
		},
		{
			id: 2,
			title: 'Beat a mole game',
			icon: gameIcon,
			preview: gamePreview,
			demo: 'https://kotsur-vlad.github.io/beat_a_mole_game/',
			source: 'https://github.com/kotsur-vlad/beat_a_mole_game',
			stack: 'React, local state, lifecycle methods',
			description: 'This is a simple game. A goal of the game is to beat the mole with a hammer'
		}
	]

	const projects = projectsProps.map(pr => <Project key={pr.id} title={pr.title} icon={pr.icon}
													  preview={pr.preview} demo={pr.demo} source={pr.source}
													  stack={pr.stack} description={pr.description}/>)

	return (
		<div className={styles.wrapper}>
			<Title title="my projects" padding={4} align="center"/>
			<div className={styles.projects}>
				{projects}
			</div>
		</div>
	);
}

export default Projects;
