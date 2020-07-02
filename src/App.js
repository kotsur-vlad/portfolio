import React from 'react';
import {Route} from "react-router-dom";

import './App.scss';
import NavBar from "./main/NavBar";
import SettingsBar from "./main/SettingsBar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

const App = () => {
	return (
		<div className="appWrapper">
			<NavBar/>
			<div className="container">
				<Route exact path={"/"} render={() => <About/>}/>
				<Route path={"/projects"} render={() => <Projects/>}/>
				<Route path={"/contacts"} render={() => <Contacts/>}/>
			</div>
			<SettingsBar/>
		</div>
	);
}

export default App;
