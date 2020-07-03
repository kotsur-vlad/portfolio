import React from "react";
import {faLanguage, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

import styles from "./SettingsBar.module.css";
import BarItem from "../common/barItem/BarItem";

const SettingsBar = () => {

	const setIconsProps = [
		{id: 1, icon: faLanguage, hint: 'Language'},
		{id: 2, icon: faMoon, hint: 'To light'},
		{id: 3, icon: faSun, hint: 'To dark'}
	];

	const setIcons = setIconsProps.map(pr => <BarItem key={pr.id} icon={pr.icon} hint={pr.hint}/>)

	// const settings = {
	// 	language: "eng",
	// 	darkTheme: false
	// };
	//
	// const theme = settings.darkTheme ? <FontAwesomeIcon barItem={faMoon} size="2x"/> :
	// 	<FontAwesomeIcon barItem={faSun} size="2x"/>;
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
