import React from "react";
import Button from "./Button";

const Enterprise = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 p-5 justify-items-start lg:justify-items-center bg-gradient-to-r from-purple-500 to-indigo-700 text-white">
			<div className="mt-12">
				<h2 className="text-5xl">BrainyBench</h2>
				<p className="text-lg mt-1 text-right">For Enterprise</p>
			</div>
			<div>
				<h3 className="tracking-[12px]">For Enterprise</h3>
				<p className="w-full lg:w-3/4 my-6">
					Perfect for those who want to explore new lands for the first time and
					want a safer and scalable journey, or those who are looking to grow
					their existing international structure. From creating and
					understanding your needs and strategies, we can build, coach, manage
					and support your own tailored international team with SDR, Marketing,
					Sales and CS professionals. So sit back, relax, and enjoy seeing your
					recurring revenue grow with very little investment with Konektera
					Enterprise.
				</p>
				<Button>Contact Now</Button>
			</div>
		</div>
	);
};

export default Enterprise;
