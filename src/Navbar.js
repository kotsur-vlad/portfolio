import React from 'react';

import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.menu}>menu navigaion</div>
			<div className={styles.social}>social navig</div>
		</div>
	);
}

export default Navbar;
