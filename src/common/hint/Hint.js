import React from "react";

import styles from './Hint.module.css';

const Hint = (props) => {

	const hintClassName = props.visibility ? `${styles.hint} ${styles.hintVisible}` : styles.hint;

	return (
		<span className={hintClassName}>props.title</span>
	)
}

export default Hint;