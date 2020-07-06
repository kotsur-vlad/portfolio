import React, {useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlay, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './Project.module.scss';

const Project = (props) => {

	const [projectVisibility, setProjectVisibility] = useState(false);
	const [focusDemo, setFocusDemo] = useState(false);

	const onProjectToggle = () => {
		setProjectVisibility( !projectVisibility)
	};

	const onDemoFocus = () => {
		setFocusDemo( !focusDemo)
	};

	const mainClassName = projectVisibility ? `${styles.main} ${styles.hidden}` : styles.main;
	const demoPreviewStyle = {backgroundImage: `url(${props.preview})`}
	const playDemoClassName = focusDemo ? null : `${styles.hidden}`;

	return (
		<div className={styles.project}>
			<div className={styles.title}>
				<img src={props.icon} alt="projectIcon"/>
				<span>{props.title}</span>
				<span className={styles.toggle} onClick={onProjectToggle}>
					{projectVisibility ? <FontAwesomeIcon icon={faPlus}/> : <FontAwesomeIcon icon={faMinus}/>}
				</span>
			</div>
			<div className={mainClassName}>
				<div className={styles.demo}>
					<div style={demoPreviewStyle} className={styles.demoPreview} onMouseEnter={onDemoFocus}
						 onMouseLeave={onDemoFocus}>
						<div className={playDemoClassName}>
							<a href={props.demo} rel="noopener noreferrer" target="_blank">
								<span className={styles.playDemoIcon}>
									<FontAwesomeIcon icon={faPlay} size="2x"/>
								</span>
							</a>
						</div>
					</div>
					<div className={styles.source}>
						<a href={props.source} rel="noopener noreferrer" target="_blank">
							<FontAwesomeIcon icon={faGithub}/> source
						</a>
					</div>
				</div>
				<div className={styles.description}>
					<div className={styles.stack}>
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