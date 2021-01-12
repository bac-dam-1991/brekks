import * as React from "react";

// Next
import { useRouter } from "next/router";

// Components
import PageToolbar from "../../components/common/PageToolbar.Component";

// Icons
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";

// Components
import PromptedIconButton from "../../components/common/PromptedIconButton.Component";

// Components

export interface LocationIndexPageProps {}

const LocationIndexPage: React.FC<LocationIndexPageProps> = () => {
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
					title="Add location"
					onClick={() => goTo("/location/add")}
				>
					<AddCircleOutlineRoundedIcon />
				</PromptedIconButton>
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

export default LocationIndexPage;
