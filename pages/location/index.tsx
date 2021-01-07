import * as React from "react";

// Components
import PageToolbar from "../../components/common/PageToolbar.Component";
import LocationUtilityToolbar from "../../components/locationPage/LocationUtilityToolbar.Component";

export interface LocationIndexPageProps {}

const LocationIndexPage: React.FC<LocationIndexPageProps> = () => {
	return (
		<div>
			<PageToolbar>
				<LocationUtilityToolbar />
			</PageToolbar>
		</div>
	);
};

export default LocationIndexPage;
