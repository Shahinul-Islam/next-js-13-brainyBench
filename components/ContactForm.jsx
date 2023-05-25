"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<div className="bg-gradient-to-r from-purple-500 to-indigo-700">
			<h3 className="text-2xl md:text-3xl lg:text-4xl pt-12 mb-9 font-bold text-center text-white ">
				Leave your contact details <br />
				and we will call you right away
			</h3>
			<div className="flex justify-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-5 p-4 w-full md:w-1/2"
				>
					<label className="text-left text-white">Full Name:</label>
					<input
						className="px-3 py-1 rounded"
						type="text"
						placeholder="Full Name"
						{...register("fullName", {
							required: true,
							max: 16,
							maxLength: 80,
						})}
					/>
					<label className="text-left text-white">Company:</label>
					<input
						className="px-3 py-1 rounded"
						type="text"
						placeholder="Company"
						{...register("company", { required: true })}
					/>
					<label className="text-left text-white">Job Title:</label>
					<input
						className="px-3 py-1 rounded"
						type="text"
						placeholder="Job Title"
						{...register("jobTitle", { required: true })}
					/>
					<label className="text-left text-white">Business Email:</label>
					<input
						className="px-3 py-1 rounded"
						type="email"
						placeholder="Business Email"
						{...register("businessEmail", {
							required: true,
							pattern:
								/(^[a-zA-Z0-9.%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,61}$)/i,
						})}
					/>
					<label className="text-left text-white">Contact Number:</label>
					<input
						className="px-3 py-1 rounded"
						type="tel"
						placeholder="Contact Number"
						{...register("contactNumber", { required: true })}
					/>
					<label className="text-left text-white">Message:</label>
					<textarea
						className="px-3 py-1 rounded"
						placeholder="Message"
						{...register("message", {})}
					/>

					<input
						type="submit"
						className="bg-white px-2 py-1 rounded font-semibold w-60 mx-auto"
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
