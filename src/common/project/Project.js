import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './Project.module.css';

const Project = (props) => {
	return (
		<div className={styles.project}>
			<div className={styles.title}>
				<img src="" alt="projectIcon"/>ICO
				props.title
				<FontAwesomeIcon icon={faMinus}/> f
				<FontAwesomeIcon icon={faPlus}/>
			</div>

			<div className={styles.main}>
				<div className={styles.demo}>
					<img src="" alt="projectPreview"/>
					<div>
						<FontAwesomeIcon icon={faGithub}/>
						<a href="#">source</a>
					</div>
				</div>

				<div className={styles.description}>
					<div>
						Technology stack
					</div>
					<div>
						Description
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;