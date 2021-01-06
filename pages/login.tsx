import * as React from "react";

// Components
import Section from "../components/common/Section.Component";
import SectionHeader from "../components/common/SectionHeader.Component";
import StyledLoginPanel from "../components/loginPage/LoginPanel.Component";

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<div>
			<Section>
				<SectionHeader text="Login" color="secondary" align="center" />
				<StyledLoginPanel />
			</Section>
		</div>
	);
};

export default LoginPage;
