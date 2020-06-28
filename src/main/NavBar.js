import React from 'react';
import {NavLink} from "react-router-dom";
import {faUser, faEnvelope, faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<ul>
				<li className={styles.link}><NavLink exact to="/" activeClassName={styles.activeLink}><FontAwesomeIcon icon={faUser} size="2x" className={styles.ico}/></NavLink></li>
				<li className={styles.link}><NavLink to="/projects" activeClassName={styles.activeLink}><FontAwesomeIcon icon={faImage}size="2x" className={styles.ico}/></NavLink></li>
				<li className={styles.link}><NavLink to="/contacts" activeClassName={styles.activeLink}><FontAwesomeIcon icon={faEnvelope}size="2x" className={styles.ico}/></NavLink></li>
			</ul>
		</div>
	);
}

export default NavBar;
