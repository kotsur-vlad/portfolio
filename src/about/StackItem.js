import React from "react";

import styles from "./StackItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StackItem = (props) => {
	return (
		<li>
			<span className={styles.icon}><FontAwesomeIcon icon={props.icon}/></span>{props.info}
		</li>
	)
}

export default StackItem;