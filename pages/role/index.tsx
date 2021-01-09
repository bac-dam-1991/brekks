import * as React from "react";

// Icons
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";

// Next
import { useRouter } from "next/router";

// Components

import PageToolbar from "../../components/common/PageToolbar.Component";
import PromptedIconButton from "../../components/common/PromptedIconButton.Component";

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
			<PageToolbar>
				<PromptedIconButton
					title="Create role"
					onClick={() => goTo("/role/add")}
				>
					<AssignmentIndRoundedIcon />
				</PromptedIconButton>
			</PageToolbar>
		</div>
	);
};

export default RoleIndexPage;
