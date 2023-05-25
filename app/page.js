import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Enterprise from "@/components/Enterprise";
import Hero from "@/components/Hero";
import LeadGeneration from "@/components/LeadGeneration";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<LeadGeneration />
			<Enterprise />
			<About />
			<ContactForm />
		</main>
	);
}
