import React from "react";

import styles from './Tilte.module.scss';

const Title = (props) => {

	const preSets = {
		paddingBottom: props.padding+"px",
		textAlign: props.align
	}

	return (
		<h3 className={styles.header} style={preSets}>
			<span>{props.title}</span>
		</h3>
	)
}

export default Title;