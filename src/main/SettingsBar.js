import React from "react";
import {faLanguage, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from "./SettingsBar.module.css";

const SettingsBar = () => {
	const settings = {
		language: "eng",
		darkTheme: false
	};

	const theme = settings.darkTheme ? <FontAwesomeIcon icon={faMoon} size="2x"/> : <FontAwesomeIcon icon={faSun} size="2x"/>;

	const onThemeButtonClick = () => {

	};

	return (
		<div className={styles.settingsBar}>
			<div className={styles.settingsButton}><
				FontAwesomeIcon icon={faLanguage} size="2x"/>
			</div>
			<div className={styles.settingsButton} onClick={onThemeButtonClick}>
				{theme}
			</div>
		</div>
	)
}

export default SettingsBar;