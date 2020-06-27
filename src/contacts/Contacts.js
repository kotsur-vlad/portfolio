import React from 'react';

import styles from './Contacts.module.css'

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<div className="styles">
				My Contacts
			</div>
			<div className="styles">Info</div>
			<div className="styles">Form</div>
		</div>
	);
}

export default Contacts;
