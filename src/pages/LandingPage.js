/** @format */

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import HeroSec from "../components/HeroSection/HeroSec";
import Features from "../components/FeatureSection/Features";
import Testimonial from "../components/TestimonialSection/Testimonial";
import Footer from "../components/Footer/Footer";

const LandingPage = ({ isOpen, toogle }) => {
	return (
		<>
			<Sidebar isOpen={isOpen} toogle={toogle} />
			<Navbar toogle={toogle} />
			<HeroSec />
			<Features />
			<Testimonial />
			<Footer />
		</>
	);
};

export default LandingPage;
