import React from "react";

import styles from './Icon.module.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Icon = (props) => {

	const onLinkMouseOver = () => {
		console.log(visibility);
		visibility = !visibility;
	};

	const onSettingClick = () => {
		console.log("sett changed");
	};

	let visibility = true;

	const hintClassName = visibility ? `${styles.hint} ${styles.hintVisible}` : styles.hint;

	return (
		<>
			{props.link
				? <li className={styles.link} onMouseEnter={onLinkMouseOver}>
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

export default Icon;