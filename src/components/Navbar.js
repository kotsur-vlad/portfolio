import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<ul className={styles.navbarList}>
				<li className={styles.link}><NavLink exact to="/" activeClassName={styles.activeLink}>I</NavLink></li>
				<li className={styles.link}><NavLink to="/projects" activeClassName={styles.activeLink}>P</NavLink></li>
				<li className={styles.link}><NavLink to="/contacts" activeClassName={styles.activeLink}>C</NavLink></li>
			</ul>
		</div>
	);
}

export default Navbar;
