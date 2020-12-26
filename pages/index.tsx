import * as React from "react";

// Components
import HeroSection from "../components/homePage/HeroSection.Component";
import FeaturesSection from "../components/homePage/FeaturesSection.Component";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<div>
			<HeroSection />
			<FeaturesSection />
		</div>
	);
};

export default HomePage;
