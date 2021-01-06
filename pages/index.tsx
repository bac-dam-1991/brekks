import * as React from "react";

// Components
import HeroSection from "../components/homePage/HeroSection.Component";
import FeaturesSection from "../components/homePage/FeaturesSection.Component";
import DemoSection from "../components/homePage/DemoSection.Component";
import AboveFooterSection from "../components/homePage/AboveFooterSection.Component";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<div>
			<HeroSection />
			<FeaturesSection />
			<DemoSection />
			<AboveFooterSection />
		</div>
	);
};

export default HomePage;
