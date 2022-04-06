import React from "react";

function DemoOutput(props) {
	console.log("DemoOutput.jsx running");
	return <p>{props.show ? "This is new" : ""}</p>;
}

export default React.memo(DemoOutput);
