import * as React from "react";

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
import CalendarNavigationToolbar from "./CalendarNavigationToolbar.Component";
import CalendarUtilityToolbar from "./CalendarUtilityToolbar.Component";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexDirection: "row",
			margin: theme.spacing(5, 0),
		},
	});

export interface CalendarToolbarProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarToolbar: React.FC<
	CalendarToolbarProps & WithStyles<typeof styles>
> = ({ classes, className }) => {
	return (
		<div className={clsx(classes.root, className)}>
			<CalendarNavigationToolbar />
			<CalendarUtilityToolbar />
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarToolbar"),
})(CalendarToolbar);
