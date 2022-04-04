import React, { useState } from "react";
import Button from "./components/UI/Button/Button.jsx";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput.jsx";

function App() {
	const [showParagraphs, setShowParagraphs] = useState(false);

	console.log("APP RUNNING");

	const tooglePararagphs = () => {
		setShowParagraphs((prevShowParagraphs) => !prevShowParagraphs);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraphs} />
			<Button onClick={tooglePararagphs}>Click me!</Button>
		</div>
	);
}

export default App;
