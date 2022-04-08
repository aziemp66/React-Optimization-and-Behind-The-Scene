import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button.jsx";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput.jsx";

function App() {
	const [showParagraphs, setShowParagraphs] = useState(false);
	const [allowToggling, setAllowToggling] = useState(false);

	console.log("APP RUNNING");

	const tooglePararagphs = useCallback(() => {
		if (allowToggling) {
			setShowParagraphs((prevShowParagraphs) => !prevShowParagraphs);
		}
	}, [allowToggling]);

	const allowToggleHandle = useCallback(() => {
		setAllowToggling(true);
	}, []);

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraphs} />
			<Button onClick={allowToggleHandle}>Allow Toggling!</Button>
			<Button onClick={tooglePararagphs}>Toogle Paragragphs</Button>
		</div>
	);
}

export default App;
