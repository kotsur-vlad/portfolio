import React from "react";

import styles from "./SettingsBar.module.css";

const SettingsBar = () => {
	return (
		<div className={styles.settingsBar}>
			<div className={styles.settingsButton}>L</div>
			<div className={styles.settingsButton}>T</div>
		</div>
	)
}

export default SettingsBar;