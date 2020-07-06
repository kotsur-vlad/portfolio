import React from 'react';
import {faFacebookSquare, faLinkedin, faTelegram, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Contacts.module.scss'
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
		<div className={styles.wrapper}>
			<Title title="contact me" padding={3} align="center"/>
			<div className={styles.contacts}>

				<div className={styles.first}>
					<ul>
						<li>Address:</li>
						<li>Minsk, Belarus</li>
						<li>Phone:</li>
						<li>+375 44 5608454</li>
					</ul>

					<div className={styles.icons}>
						{contactIcons}
					</div>
				</div>

				<div className={styles.second}>
					<form action="">
						<input required type="text" placeholder="Name"/>
						<input required type="text" placeholder="Email"/>
						<input type="text" placeholder="Subject"/>
						<textarea required placeholder="Message"/>
						<button>Submit <FontAwesomeIcon icon={faTelegramPlane}/></button>
					</form>
				</div>

			</div>
		</div>
	);
}

export default Contacts;
