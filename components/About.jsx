import React from "react";
import Button from "./Button";
import Image from "next/image";
import AboutImage from "../assests/images/corporate-01.jpg";

const About = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row w-full">
			<div className="flex flex-col p-2 text-center justify-center items-center h-[650px] w-full lg:w-1/2">
				<h2
					className="text-[32px] lg:text-[50px] font-bold mb-8"
					style={{ fontWeight: "900" }}
				>
					About Us
				</h2>
				<p className="text-base mb-4 text-center w-full lg:w-3/4">
					We have over 10 years of experience in customer-facing roles
					specifically in connecting International companies to the Latin
					American market, with an extensive track record of expanding markets
					from scratch. You will find us in our offices in São Paulo or in Tel
					Aviv, usually in a call, either pitching a project to a decision
					maker, phoning new leads, or saving our client’s lives. Digital nomads
					by nature and with a hands-on approach, we believe technology should
					really have no boundaries.
				</p>
				{/* <Button>Contact Now</Button> */}
			</div>
			<div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] lg:h-[650px]">
				<div className="aspect-w-2 aspect-h-1">
					<Image
						src={AboutImage}
						fill
						style={{
							objectFit: "cover",
							position: "absolute",
						}}
						alt="hero image"
					/>
				</div>

				<div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-violet-800 opacity-50"></div>
			</div>
		</div>
	);
};

export default About;
