import * as React from "react";

// Next
import { useRouter } from "next/router";

// Components
import Section from "../../components/common/Section.Component";
import SectionHeader from "../../components/common/SectionHeader.Component";

export interface RoleIndexPageProps {}

const RoleIndexPage: React.FC<RoleIndexPageProps> = () => {
	// Router
	const router = useRouter();

	// Handlers
	const goTo = (path: string) => {
		router.push(path);
	};

	return (
		<div>
			<Section>
				<SectionHeader text="Add role" color="primary" />
			</Section>
		</div>
	);
};

export default RoleIndexPage;
