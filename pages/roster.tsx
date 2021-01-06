import * as React from "react";
import CalendarContainer from "../components/calendar/CalendarContainer.Component";

// Components
import Section from "../components/common/Section.Component";

export interface RosterPageProps {}

const RosterPage: React.FC<RosterPageProps> = () => {
	return (
		<div>
			<Section>
				<CalendarContainer color="secondary" />
			</Section>
		</div>
	);
};

export default RosterPage;
