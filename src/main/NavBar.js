import React from 'react';
import {faUser, faEnvelope, faImage} from "@fortawesome/free-solid-svg-icons";

import styles from './NavBar.module.css';
import Icon from "../common/hint/Icon";

const NavBar = () => {

	const navIconsProps = [
		{id: 1, icon: faUser, hint: 'About', linkTo: '/', exact: true},
		{id: 2, icon: faImage, hint: 'Contacts', linkTo: '/projects'},
		{id: 3, icon: faEnvelope, hint: 'Projects', linkTo: '/contacts'}
	];

	const navIcons = navIconsProps.map(pr => <Icon key={pr.id} icon={pr.icon} hint={pr.hint} link={pr.linkTo}
												   exact={pr.exact}/>)

	return (
		<div className={styles.navBar}>
			<ul>
				{navIcons}
			</ul>
		</div>
	);
}

export default NavBar;
