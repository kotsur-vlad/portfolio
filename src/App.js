import React from 'react';

import './App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Navbar/>
			<div className="contentWrapper">
				Content
			</div>
			<Footer/>
		</div>
	);
}

export default App;
