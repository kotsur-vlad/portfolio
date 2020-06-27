import React from "react";

import styles from "./SettingsBar.module.css";

const SettingsBar = () => {
	return (
		<div className={styles.settingsBar}>
			<div className={styles.settingsButton}>Lang</div>
			<div className={styles.settingsButton}>Them</div>
		</div>
	)
}

export default SettingsBar;