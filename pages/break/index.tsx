import * as React from "react";

// Icons
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

// Next
import { useRouter } from "next/router";

// Components

import PageToolbar from "../../components/common/PageToolbar.Component";
import PromptedIconButton from "../../components/common/PromptedIconButton.Component";

export interface BreakIndexPageProps {}

const BreakIndexPage: React.FC<BreakIndexPageProps> = () => {
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
					title="Add break schedule"
					onClick={() => goTo("/break/add")}
				>
					<AddCircleOutlineRoundedIcon />
				</PromptedIconButton>
			</PageToolbar>
		</div>
	);
};

export default BreakIndexPage;
