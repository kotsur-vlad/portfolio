import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactIcon = (props) => {
	return (
		<div title={props.title}>
			<a href={props.link} rel="noopener noreferrer" target="_blank">
				<FontAwesomeIcon icon={props.icon}/>
			</a>
		</div>
	)
}

export default ContactIcon;