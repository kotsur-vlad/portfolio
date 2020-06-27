import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<ul>
				<li className={styles.link}><NavLink exact to="/" activeClassName={styles.activeLink}>I'm</NavLink></li>
				<li className={styles.link}><NavLink to="/projects" activeClassName={styles.activeLink}>Proj</NavLink></li>
				<li className={styles.link}><NavLink to="/contacts" activeClassName={styles.activeLink}>Cont</NavLink></li>
			</ul>
		</div>
	);
}

export default NavBar;
