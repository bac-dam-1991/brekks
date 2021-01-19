import * as React from "react";

// Components
import CalendarContainer from "../calendar/CalendarContainer.Component";
import Section from "../common/Section.Component";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import { generateClassName } from "../../domain/utility/utility";

export const styles = (theme: Theme) => createStyles({ root: {} });

export interface AboveFooterSectionProps {}

const AboveFooterSection: React.FC<
	AboveFooterSectionProps & WithStyles<typeof styles>
> = ({}) => {
	return (
		<Section>
			<CalendarContainer color="primary" />
		</Section>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("AboveFooterSection"),
})(AboveFooterSection);
