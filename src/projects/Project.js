import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './Project.module.scss';

const Project = (props) => {
	return (
		<div className={styles.project}>
			<div className={styles.title}>
				<img src={props.icon} alt="projectIcon"/>
				{props.title}
				<FontAwesomeIcon icon={faMinus}/>
				<FontAwesomeIcon icon={faPlus}/>
			</div>

			<div className={styles.main}>
				<div className={styles.demo}>
					<a href={props.demo}>
						<img src={props.preview} alt="projectPreview"/>
					</a>
					<div>
						<FontAwesomeIcon icon={faGithub}/>
						<a href={props.source}>source</a>
					</div>
				</div>

				<div className={styles.description}>
					<div>
						{props.stack}
					</div>
					<div>
						{props.description}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;