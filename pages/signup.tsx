import * as React from "react";

// NPM
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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
				<GoogleReCaptchaProvider
					reCaptchaKey={
						process.env.NODE_ENV === "production"
							? "6LeEYzsaAAAAAHuFGXw8nHxnQkt0pYC-ENzbVMDb"
							: "6Lcp8jsaAAAAALcRvVfN5qyWG2QykvCTK6Um2dGf"
					}
					language="en"
				>
					<StyledSignUpPanel />
				</GoogleReCaptchaProvider>
			</Section>
		</div>
	);
};

export default SignupPage;
