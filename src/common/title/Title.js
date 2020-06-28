import React from "react";

import styles from './Tilte.module.css';

const Title = (props) => {
	return (
		<h3 className={styles.header}>
			<span>{props.title}</span>
		</h3>
	)
}

export default Title;