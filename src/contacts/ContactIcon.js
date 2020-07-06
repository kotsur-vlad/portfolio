import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './ContactIcon.module.scss'

const ContactIcon = (props) => {
	return (
		<div title={props.title} className={styles.wrapper}>
			<a href={props.link} rel="noopener noreferrer" target="_blank">
				<span className={styles.icon}>
					<FontAwesomeIcon icon={props.icon} size="2x"/>
				</span>
			</a>
		</div>
	)
}

export default ContactIcon;
