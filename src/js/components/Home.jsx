import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="d-flex justify-content-center align-items-center">
				<div id="mastil" className="bg-dark"></div>
			</div>
			<div id="luces" className="rounded-4 d-flex flex-column justify-content-center align-items-center">
				<div id="rojo" className="rounded-circle m-auto p-auto"></div>
				<div id="naranja" className="rounded-circle m-auto p-auto"></div>
				<div id="verde" className="rounded-circle m-auto p-auto"></div>
			</div>
		</div>
	);
};

export default Home;