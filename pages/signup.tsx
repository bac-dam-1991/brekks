import * as React from "react";
import Section from "../components/common/Section.Component";
import SectionHeader from "../components/common/SectionHeader.Component";

export interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
	return (
		<div>
			<Section>
				<SectionHeader text="Sign up" />
			</Section>
		</div>
	);
};

export default SignupPage;
