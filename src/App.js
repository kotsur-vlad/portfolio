import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import NewFunctional from "./components/NewFunctional";

const App = () => {
	return (
		<div className="appWrapper">
			<Navbar/>
			<div className="container">
				<Route exact path={"/"} render={() => <About/>}/>
				<Route path={"/projects"} render={() => <Projects/>}/>
				<Route path={"/contacts"} render={() => <Contacts/>}/>
			</div>
			<NewFunctional/>
		</div>
	);
}

export default App;
