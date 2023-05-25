"use client";
import React, { useEffect, useRef } from "react";
import "../css/Hero.css";
import HeroVideo01 from "../video/video.mp4";
import Button from "./Button";

const Hero = () => {
	const vidRef = useRef();

	useEffect(() => {
		vidRef.current.play();
	}, []);
	return (
		<div>
			<section className="hero">
				<video autoplay={true} loop muted ref={vidRef}>
					<source src={HeroVideo01} type="video/mp4" />
				</video>

				<div
					className="w-full h-full flex flex-col  items-center relative
             bg-blue-900/60 backdrop-brightness-75"
				>
					<div className="mt-6 p-5 lg:mt-56 text-white  absolute ml-6">
						<h2 className=" lg:w-3/4 text-left md:text-5xl text-3xl lg:text-6xl font-semibold lg:font-bold">
							Expand your company to lands never once imagined.
						</h2>
						<p className="w-full md:w-1/2 mt-4">
							We handle everything, from selling to support,
							<br /> to your future clients in Latin America
						</p>
						<form action="/send-data-here" method="post">
							<input
								name="email"
								type="email"
								placeholder="Enter your business email"
								className="px-2 py-1 rounded-xl mt-6 mb-5"
							/>
							<Button type="submit">Contact Now</Button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
