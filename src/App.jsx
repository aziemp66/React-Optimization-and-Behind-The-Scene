import React, { useState } from "react";
import Button from "./components/UI/Button/Button.jsx";
import "./App.css";

function App() {
	const [showParagraphs, setShowParagraphs] = useState(false);

	console.log("APP RUNNING");

	const tooglePararagphs = () => {
		setShowParagraphs((prevShowParagraphs) => !prevShowParagraphs);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			{showParagraphs && <p>This is a paragraph</p>}
			<Button onClick={tooglePararagphs}>Click me!</Button>
		</div>
	);
}

export default App;
