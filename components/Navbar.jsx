"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<div className={`w-full xl:grid xl:place-items-center z-50 relative`}>
			<nav className="  lg:flex lg:items-center xl:container">
				<div className="flex">
					<a className="m-4 text-2xl font-bold" href="#home">
						Brainybench
					</a>
					<button
						className="px-4 my-2 mx-4 ml-auto   lg:hidden"
						onClick={() => setShowMobileMenu(!showMobileMenu)}
					>
						{showMobileMenu ? (
							<RxCross1 className="h-8 w-8 "></RxCross1>
						) : (
							<CiMenuFries className="h-8 w-8 "></CiMenuFries>
						)}
					</button>
				</div>
				<ul
					className={
						(showMobileMenu ? "" : "hidden") +
						` lg:ml-auto lg:items-center lg:flex bg-[#FFC700] absolute lg:relative justify-end min-h-full w-full lg:bg-white`
					}
				>
					<li className="py-2 grid place-items-center lg:mx-2 ">
						<a href="/services" className="p-2 text-center rounded font-bold">
							Services
						</a>
					</li>

					<li className="py-2 grid place-items-center lg:mx-2">
						<a href="/clients" className="p-2 text-center rounded font-bold">
							Clients
						</a>
					</li>

					<li className="py-2 grid place-items-center lg:mx-2">
						<a href="/customer" className="p-2   text-center rounded font-bold">
							Customer Stories
						</a>
					</li>
					<li className="py-2 grid place-items-center lg:mx-2">
						<a href="/results" className="p-2 text-center rounded font-bold">
							Our Results
						</a>
					</li>
					<li className="py-2 grid place-items-center lg:mx-2">
						<a href="/about" className="p-2 text-center rounded font-bold">
							About Us
						</a>
					</li>
					<li className="py-2 grid place-items-center lg:mx-2">
						<a href="/contacts" className="p-2 text-center rounded font-bold">
							Contacts
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
