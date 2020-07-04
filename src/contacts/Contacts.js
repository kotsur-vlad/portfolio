import React from 'react';
import {faFacebookSquare, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";

import styles from './Contacts.module.css'
import Title from "../common/title/Title";
import ContactIcon from "./ContactIcon";

const Contacts = () => {

	const contactIconsProps = [
		{id: 1, icon: faLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/kotsur-vlad/'},
		{id: 2, icon: faTelegram, title: 'Telegram', link: 'https://t.me/kotsur_vlad'},
		{id: 3, icon: faAt, title: 'Gmail', link: 'mailto:kotsur.vlad@gmail.com'},
		{id: 3, icon: faFacebookSquare, title: 'Facebook', link: 'https://www.facebook.com/kotsur.vlad/'}
	];

	const contactIcons = contactIconsProps.map(pr => <ContactIcon key={pr.id} icon={pr.icon} title={pr.title}
																  link={pr.link}/>)


	return (
		<div className={styles.contacts}>
			<Title title="contact me" padding={3} align="center"/>

			<div>
				Adress:
				Minsk, Belarus
				Phone:
				+375 44 5608454
				<div>
					{contactIcons}
				</div>
			</div>

			<div>
				<form action="">
					<input type="text" placeholder="Name"/>
					<input type="text" placeholder="Email"/>
					<input type="text" placeholder="Subject"/>
					<input type="text" placeholder="Message"/>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default Contacts;
