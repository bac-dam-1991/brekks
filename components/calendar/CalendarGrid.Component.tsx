import * as React from "react";

// NPM
import clsx from "clsx";

// Utility
import { generateClassName } from "../../domain/utility/utility";

// COmponents
import CalendarPanel from "./CalendarPanel.Component";

// MUI
import {
	withStyles,
	WithStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridGap: theme.spacing(0.5),
			margin: theme.spacing(5, 0),
		},
	});

export interface CalendarGridProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarGrid: React.FC<CalendarGridProps & WithStyles<typeof styles>> = ({
	classes,
	className,
	...divProps
}) => {
	return (
		<div className={clsx(classes.root, className)} {...divProps}>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarHead", text: "Monday" }}
			/>
			<CalendarPanel
				data={{ discriminator: "ICalendarBody", date: "21" }}
			/>
		</div>
	);
};

export default withStyles(styles, {
	classNamePrefix: generateClassName("CalendarGrid"),
})(CalendarGrid);
