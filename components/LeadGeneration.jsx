import React from "react";
import Button from "./Button";

const LeadGeneration = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 p-5 justify-items-start lg:justify-items-center bg-gradient-to-r from-teal-600 to-cyan-300 text-white">
			<div className="mt-12">
				<h2 className="text-5xl">BrainyBench</h2>
				<p className="text-lg mt-1 text-right">Lead Generation</p>
			</div>
			<div>
				<h3 className="tracking-[12px]">LEAD GENERATION</h3>
				<p className="w-full lg:w-3/4 my-6">
					Perfect for companies who already have a Sales structure for
					international clients, but are facing hiring challenges due to the
					competitive SDR market and are looking for international qualified
					leads. Konektera will generate qualified leads with a hands-on
					approach, creating successful outbound meetings for your team of
					experts to come in and execute.
				</p>
				<Button>Contact Now</Button>
			</div>
		</div>
	);
};

export default LeadGeneration;
