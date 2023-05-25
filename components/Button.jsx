import React from "react";

const Button = ({ children }) => {
	return (
		<button className="rounded-lg px-2 py-1 bg-violet-900 mx-2">
			{children}
		</button>
	);
};

export default Button;
