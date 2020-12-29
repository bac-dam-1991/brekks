import * as React from "react";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// Components
import CalendarHeading from "./CalendarHeading.Component";
import CalendarToolbar from "./CalendarToolbar.Component";
import CalendarGrid from "./CalendarGrid.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
	});

export interface CalendarContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarContainer: React.FC<
	CalendarContainerProps & WithStyles<typeof styles>
> = ({ classes, className, ...divProps }) => {
	return (
		<div className={clsx(className, classes.root)} {...divProps}>
			<CalendarHeading color="primary" />
			<CalendarToolbar />
			<CalendarGrid />
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarContainer"),
})(CalendarContainer);
