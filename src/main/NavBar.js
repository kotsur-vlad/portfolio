import React from 'react';
import {NavLink} from "react-router-dom";
import {faUser, faEnvelope, faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './NavBar.module.css';

const NavBar = () => {

	const onLinkMouseOver = () => {
		console.log(visible);
		visible = !visible;
	}

	let visible = false;

	const hintClassName = visible ? `${styles.linkHint} ${styles.linkHintVisible}` : styles.linkHint;

	return (
		<div className={styles.navBar}>
			<ul>
				<li className={styles.link} onMouseEnter={onLinkMouseOver}>
					<NavLink exact to="/" activeClassName={styles.activeLink}>
						<FontAwesomeIcon icon={faUser} size="2x" className={styles.ico}/>
						<span className={hintClassName}>About</span>
					</NavLink>
				</li>
				<li className={styles.link}>
					<NavLink to="/projects" activeClassName={styles.activeLink}>
						<FontAwesomeIcon icon={faImage} size="2x" className={styles.ico}/>
						<span className={hintClassName}>Projects</span>
					</NavLink>
				</li>
				<li className={styles.link}>
					<NavLink to="/contacts" activeClassName={styles.activeLink}>
						<FontAwesomeIcon icon={faEnvelope} size="2x" className={styles.ico}/>
						<span className={hintClassName}>Contacts</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
