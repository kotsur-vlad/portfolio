import React from "react";
import {faLanguage, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

import styles from "./SettingsBar.module.css";
import Icon from "../common/hint/Icon";

const SettingsBar = () => {

	const setIconsProps = [
		{id: 1, icon: faLanguage, hint: 'Language'},
		{id: 2, icon: faMoon, hint: 'To light'},
		{id: 3, icon: faSun, hint: 'To dark'}
	];

	const setIcons = setIconsProps.map(pr => <Icon key={pr.id} icon={pr.icon} hint={pr.hint}/>)

	// const settings = {
	// 	language: "eng",
	// 	darkTheme: false
	// };
	//
	// const theme = settings.darkTheme ? <FontAwesomeIcon icon={faMoon} size="2x"/> :
	// 	<FontAwesomeIcon icon={faSun} size="2x"/>;
	//
	// const onThemeButtonClick = () => {
	//
	// };

	return (
		<div className={styles.settingsBar}>
			<ul>
				{setIcons}
			</ul>
		</div>
	)
}

export default SettingsBar;