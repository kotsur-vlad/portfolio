import React, {useState} from "react";

import styles from './BarItem.module.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BarItem = (props) => {

	const [hintVisibility, setHintVisibility] = useState(false)

	const onLinkMouseOver = () => {
		setHintVisibility(!hintVisibility);
	};

	const onSettingClick = () => {
		console.log("sett changed");
	};

	const hintClassName = hintVisibility ? `${styles.hint} ${styles.visible}` : styles.hint;

	return (
		<>
			{props.link
				? <li className={styles.link} onMouseEnter={onLinkMouseOver} onMouseLeave={onLinkMouseOver}>
					<NavLink exact={props.exact} to={props.link} activeClassName={styles.activeLink}>
						<FontAwesomeIcon icon={props.icon} size="2x" className={styles.ico}/>
						<span className={hintClassName}>{props.hint}</span>
					</NavLink>
				</li>
				: <li className={styles.button} onClick={onSettingClick}>
					<FontAwesomeIcon icon={props.icon} size="2x" className={styles.ico}/>
					<span className={hintClassName}>{props.hint}</span>
				</li>
			}
		</>
	)
}

export default BarItem;