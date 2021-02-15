import * as React from "react";

// Components
import Section from "../components/common/Section.Component";
import SectionHeader from "../components/common/SectionHeader.Component";
import SummaryContainer from "../components/profilePage/SummaryContainer.Component";

export interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	return (
		<div>
			<Section>
				<SectionHeader text="Welcome back!" color="primary" />
				<SummaryContainer />
			</Section>
		</div>
	);
};

export default ProfilePage;
