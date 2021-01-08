import * as React from "react";

// Components
import PageToolbar from "../../components/common/PageToolbar.Component";

// Icons
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

// Components
import PromptedIconButton from "../../components/common/PromptedIconButton.Component";

// Components

export interface LocationIndexPageProps {}

const LocationIndexPage: React.FC<LocationIndexPageProps> = () => {
	return (
		<div>
			<PageToolbar>
				<PromptedIconButton title="Add store">
					<AddCircleOutlineRoundedIcon />
				</PromptedIconButton>
			</PageToolbar>
		</div>
	);
};

export default LocationIndexPage;
