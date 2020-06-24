import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import SettingsBar from "./components/SettingsBar";

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
