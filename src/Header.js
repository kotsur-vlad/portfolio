import React from 'react';

import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>Logo</div>
			<div className={styles.social}>Social</div>
		</div>
	);
}

export default Header;
