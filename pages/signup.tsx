import * as React from "react";

// Components
import Section from "../components/common/Section.Component";
import SectionHeader from "../components/common/SectionHeader.Component";
import StyledSignUpPanel from "../components/signupPage/SignUpPanel.Component";

export interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
	return (
		<div>
			<Section>
				<SectionHeader
					text="Sign up"
					color="secondary"
					align="center"
				/>
				<StyledSignUpPanel />
			</Section>
		</div>
	);
};

export default SignupPage;
