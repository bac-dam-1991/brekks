import * as React from "react";

// Components
import HeroSection from "../components/homePage/HeroSection.Component";
import FeaturesSection from "../components/homePage/FeaturesSection.Component";
import DemoSection from "../components/homePage/DemoSection.Component";
import { GetStaticProps, GetStaticPropsContext } from "next";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<div>
			<HeroSection />
			<FeaturesSection />
			<DemoSection />
		</div>
	);
};

export default HomePage;
